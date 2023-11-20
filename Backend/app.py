from fastapi import FastAPI, HTTPException, Query
import databases
import sqlalchemy
import uvicorn
from sqlalchemy import Table, Column, String, Float, MetaData, DateTime, Integer
from typing import List, Optional
import datetime
from chatbot import get_response_openai
from models import UserIn, UserOut, UserPut, ExpenseIn, ExpenseOut
from graph import generate_expense_plot
from stocks import get_stock_data

## SQLAlchemy setup
DATABASE_URL = "sqlite:///./test.db"
database = databases.Database(DATABASE_URL)
metadata = MetaData()

expenses = Table(
   "expenses", metadata,
   Column("id", String, primary_key=True),
   Column("type", String),
   Column("description", String),
   Column("amount", Float),
   Column("date", DateTime)
)

users = Table(
   "users", metadata,
   Column("id", Integer, primary_key=True, index=True),
   Column("income", Float),
   Column("age", Integer),
   Column("desired_retirement_age", Integer),
   Column("job_profile", String),
)

engine = sqlalchemy.create_engine(
   DATABASE_URL, connect_args={"check_same_thread": False}
)
metadata.create_all(engine)

## FastAPI and Pydantic setup
app = FastAPI()

## API Routes
@app.on_event("startup")
async def startup():
    await database.connect()

@app.on_event("shutdown")
async def shutdown():
    await database.disconnect()

@app.get("/")
async def root():
    print("root")

@app.get("/expenses/", response_model=List[ExpenseOut])
async def read_expenses():
    query = expenses.select()
    return await database.fetch_all(query)

@app.get("/expenses/graph/")
async def read_expenses_plot():
    return await generate_expense_plot(database)

@app.post("/expenses/", response_model=ExpenseOut)
async def create_expense(expense: ExpenseIn):
    if expense.date is None:  # if no date was provided
        expense.date = datetime.datetime.utcnow()  # add the current date
    query = expenses.insert().values(**expense.dict())
    await database.execute(query)
    return expense

@app.get("/stocks/")
async def read_stocks(symbols: List[str] = Query(None)):
    return get_stock_data(symbols)

@app.get("/expenses/{expense_id}", response_model=ExpenseOut)
async def read_expense(expense_id: str):
    query = expenses.select().where(expenses.c.id == expense_id)
    expense = await database.fetch_one(query)
    if expense is None:
        raise HTTPException(status_code=404, detail="Expense not found")
    return expense

@app.post("/users/", response_model=UserOut)
async def create_user(user: UserIn):
    query = users.insert().values(**user.dict()).returning(users.c.id)
    last_record_id = await database.execute(query)
    return {**user.dict(), "id": last_record_id} 

@app.get("/users/{user_id}", response_model=UserOut)
async def read_user(user_id: int):
    query = users.select().where(users.c.id == user_id)
    user = await database.fetch_one(query)
    if user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return user

@app.put("/users/{user_id}", response_model=UserOut)
async def update_user(user_id: int, user: UserPut):
    query = users.update().where(users.c.id == user_id).values(**user.dict()).returning(*users.c)
    updated_user = await database.fetch_one(query)
    if updated_user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return updated_user

@app.delete("/users/{user_id}")
async def delete_user(user_id: int):
    query = users.delete().where(users.c.id == user_id).returning(users.c.id)
    deleted_user_id = await database.execute(query)
    if deleted_user_id is None:
        raise HTTPException(status_code=404, detail="User not found")
    return {"detail": f"Deleted user {deleted_user_id}"}

@app.get("/chatbot/")
def campaign(prompt):
    return get_response_openai(prompt)

if __name__ == "__main__":
    uvicorn.run("app:app", port=8080, reload=True, workers=3)

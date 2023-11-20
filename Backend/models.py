from pydantic import BaseModel
from typing import List, Optional
import datetime

class ExpenseIn(BaseModel):
    id: str
    type: str
    description: str
    amount: float
    date: Optional[datetime.datetime] = None

class ExpenseOut(ExpenseIn):
    pass


class UserIn(BaseModel):
    income: float
    age: int
    desired_retirement_age: int
    job_profile: str

class UserOut(UserIn):
    id: int

class UserPut(BaseModel):
    income: Optional[float] = None
    age: Optional[int] = None
    desired_retirement_age: Optional[int] = None
    job_profile: Optional[str] = None

import seaborn as sns
from io import BytesIO
import matplotlib.pyplot as plt
import pandas as pd
import base64
import sqlalchemy

async def generate_expense_plot(database):
    query = sqlalchemy.sql.text(
        "SELECT date, SUM(amount) as total_expenses FROM expenses GROUP BY date"
    )

    values = dict()
    results = await database.fetch_all(query)

    for result in results:
        date = result["date"].strftime("%Y-%m-%d")
        expenses = result["total_expenses"]
        values[date] = expenses

    expense_data = pd.DataFrame(values.items(), columns=['Date', 'Expenses'])

    plt.fig, ax = plt.subplots(figsize=(10, 5))
    sns.lineplot(x=expense_data['Date'], y=expense_data['Expenses'], ax=ax)
    plt.title('Expenses over time')
    
    image = BytesIO()
    plt.savefig(image, format='png')
    image.seek(0)
    
    image_string = base64.b64encode(image.read()).decode('utf8')

    return { 'data': f'data:image/png;base64,{image_string}' }
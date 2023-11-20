import os
import requests
from dotenv import load_dotenv, find_dotenv

load_dotenv(find_dotenv())
alpha_vantage_key = os.getenv("ALPHA_VANTAGE_KEY")

def get_stock_data(symbols):
    base_url = 'https://www.alphavantage.co/query'
    results = {}

    for symbol in symbols:
        params = {
            "function": "TIME_SERIES_INTRADAY",
            "symbol": symbol,
            "interval": "60min",
            "apikey": alpha_vantage_key
        }
        response = requests.get(base_url, params=params)
        data=response.json()

        latest_timing=data['Meta Data']['3. Last Refreshed']

        open_price=data['Time Series (60min)'][latest_timing]['1. open']
        high_price=data['Time Series (60min)'][latest_timing]['2. high']
        low_price=data['Time Series (60min)'][latest_timing]['3. low']
        close_price=data['Time Series (60min)'][latest_timing]['4. close']

        results[symbol] = {
            "open": open_price,
            "close": close_price,
            "high": high_price,
            "low": low_price,
        }

    return results

symbols = ["IBM", "AAPL"]
stock_data = get_stock_data(symbols)

print(stock_data)
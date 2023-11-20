import os
import sys
from dotenv import load_dotenv, find_dotenv
from openai import OpenAI
import openai

load_dotenv(find_dotenv())
openai.api_key = os.environ["OPENAI_API_KEY"]

client = OpenAI()


def get_response_openai(prompt):
    try:
        prompt = prompt
        completion = client.chat.completions.create(
            model="gpt-3.5-turbo",
            n=1,
            top_p=1,
            frequency_penalty=0,
            presence_penalty=0,
            messages=[
                {"role": "system", "content": "You are an retirement expert. And gives advie about retirement planning. Talking about FIRE and answer questions a person has to you."},
                {"role": "user", "content": prompt},
            ],
        )
    except Exception as e:
        print("Error in generating response:", str(e))
        return 503
    return completion.choices[0].message

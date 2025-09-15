import os
from dotenv import load_dotenv

load_dotenv()

TELEGRAM_TOKEN = os.getenv("TELEGRAM_TOKEN")
TODO_API_URL = os.getenv("TODO_API_URL", "http://server:8000")

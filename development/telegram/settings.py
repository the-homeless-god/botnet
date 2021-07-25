import os
from dotenv import load_dotenv

if os.path.exists('telegram/template.env'):
    load_dotenv(".env")
    TELEGRAM_TOKEN = os.getenv("TOKEN")

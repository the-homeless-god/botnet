import os
from dotenv import load_dotenv

if os.path.exists(".env"):
    load_dotenv(".env")
    
    VK_TOKEN = os.getenv("VK_TOKEN")

    TELEGRAM_TOKEN = os.getenv("TELEGRAM_TOKEN")

    BOT_NAME = os.getenv("BOT_NAME")

    
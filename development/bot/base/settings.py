import os
from dotenv import load_dotenv

if os.path.exists(".env"):
    load_dotenv(".env")
    
    VK_TOKEN = os.getenv("VK_TOKEN")

    TELEGRAM_TOKEN = os.getenv("TELEGRAM_TOKEN")

    BOT_NAME = os.getenv("BOT_NAME")

    GREETING_MESSAGE = os.getenv("GREETING_MESSAGE")

    MOOD_MESSAGE = os.getenv("MOOD_MESSAGE")

    FAREWELL_MESSAGE = os.getenv("FAREWELL_MESSAGE")

    ISUCT_MESSAGE = os.getenv("ISUCT_MESSAGE")

    COMPLIMENT_MESSAGE = os.getenv("COMPLIMENT_MESSAGE")

    CONDOLENCES_MESSAGE = os.getenv("CONDOLENCES_MESSAGE")

    DIFFERENT_MESSAGE = os.getenv("DIFFERENT_MESSAGE")
    

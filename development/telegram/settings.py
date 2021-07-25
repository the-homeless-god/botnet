import os
from dotenv import load_dotenv

if os.path.exists("template.env"):
    load_dotenv("template.env")

<<<<<<< HEAD
    TELEGRAM_TOKEN = os.getenv("TOKEN")
=======
TELEGRAM_TOKEN = os.getenv("TOKEN")

>>>>>>> ae8f2d0af42aa16879592385628e640a621ce4d9

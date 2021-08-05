import os
from dotenv import load_dotenv

if os.path.exists("template.env"):
    load_dotenv("template.env")
    
    VK_TOKEN = os.getenv("TOKEN")
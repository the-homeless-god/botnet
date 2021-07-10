from bot import Bot
from adapter import Adapter

def main():
    bot = Bot()
    
    while(True):
        message = input()

        message = message.lower()

        print(bot.dialog(message))

main()


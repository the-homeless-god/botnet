from bot import Bot
from adapter import Adapter

def main():
    bot = Bot()
    active_session_flag = True

    while(active_session_flag):
        message = input()

        message = message.lower()

        print(bot.dialog(message))

main()


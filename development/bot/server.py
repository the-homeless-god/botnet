from bot import Bot
from adapter import Adapter

def main():
    bot = Adapter()
    active_session_flag = True

    while(active_session_flag):
        message = input()

        print(f'Bot: {bot.get_echo(message)}')

main()

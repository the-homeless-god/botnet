from bot import Bot

def main():
    bot = Bot()
    active_session_flag = True

    while(active_session_flag):
        message = input()
        bot.echo(message)

main()


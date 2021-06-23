from bot import Bot

def main():
    active_session_flag = True
    bot = Bot()


    while (active_session_flag == True):
        message = input()
        bot.echo(message)
    
main() 
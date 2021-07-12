from bot import Bot
from adapter import Adapter

import string

def main():
    bot = Bot()
    
    while(True):
        message = input()

        # preparing a message

        message = message.lower()
        
        # removing punctuation marks
        for item in string.punctuation:
            if item in message:
                message = message.replace(item, '')
        
        # delete spaces
        message = message.strip()

        # we save the context so that we can track what the user said later
        bot.context_save(message)
        
        # dialog
        print(bot.dialog(message))

main()


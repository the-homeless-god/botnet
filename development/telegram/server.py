from bot import Bot
from adapter import Adapter

import string

def Server(message):
    bot = Bot()

    while(True):
        # preparing a message
        message = message.lower()
        
        # removing punctuation marks
        message = message.replace('?', '')
        message = message.replace('.', '')
        message = message.replace('!', '')
        message = message.replace(')', '')
        message = message.replace('(', '')
        message = message.replace(' ', '')

        # we save the context so that we can track what the user said later
        bot.context_save(message)
        
        # dialog
        return bot.dialog(message)
    



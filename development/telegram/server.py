from bot import Bot

def Server(message):
    bot = Bot()

    while(True):
        # preparing a message
        message = message.lower()
        
        # removing punctuation marks
        message = message.replace('.', '').replace(',', '').replace('?', '').replace('!', '').replace('.', '').replace(':', '').replace(' ', '')  

        # we save the context so that we can track what the user said later
        bot.context_save(message)
        
        # dialog
        return bot.dialog(message)
    



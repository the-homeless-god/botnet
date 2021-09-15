from base.bot import Bot

def Server(message):
    bot = Bot()

    # we save the context so that we can track what the user said later
    bot.context_save(message)
        
    # dialog
    return bot.dialog(message)
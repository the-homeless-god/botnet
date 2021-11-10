import base.settings as settings
import base.prepare_message as pm
import base.messages as ms

class Bot:

    def echo(self, message):
        self.message = message
        
        return self.message
    
    def dialog(self, message):
        self.message = message
    
        # preparing a message
        message = pm.prepare_message(message)

        # greeting
        if message in ms.greeting_message:
            return f'{settings.GREETING_MESSAGE} {settings.BOT_NAME}'
        
        # mood
        if message in ms.mood_message:
            return f'{settings.MOOD_MESSAGE}'
        
        # farewell
        if message in ms.farewell_message:
            return f'{settings.FAREWELL_MESSAGE}'
        
        # ISUCT message: different phrases and slogans
        if message in ms.isuct_message:
            return f'{settings.ISUCT_MESSAGE}'
        
        # compliment
        if message in ms.compliment_message:
            return f'{settings.COMPLIMENT_MESSAGE}'
        
        # condolences
        if message in ms.condolences_message:
            return f'{settings.CONDOLENCES_MESSAGE}'

        return f'{settings.DIFFERENT_MESSAGE}'
    
    def save_context(self, message):
        self.message = message

        self.context = []

        # save context message
        self.context.append(message)
        

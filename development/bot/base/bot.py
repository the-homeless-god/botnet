import base.settings as settings
import base.prepare_message as pm

class Bot:

    # data for dialog: recognizing meaning from messages
    greeting_message = ('привет', 'доброеутро', 'добрыйдень', 'добрыйвечер', 'здравствуй', 'здравствуйте', 'приветствую', 'прив', 'здрасти', 'ктоты', 'тыкто')

    mood_message = ('какдела', 'каконо', 'какнастроение', 'какуспехи', 'всёнормально', 'тыкак', 'какты')

    farewell_message = ('пока', 'прощай', 'до свидания', 'удачи', 'успехов', 'покеда', 'покедова')

    isuct_message = ('химтех', 'хим', 'ивановскийгосударственныйхимикотехнологическийуниверситет', 'исукт', 'исакт', 'игхту', 'тылюбишьхимтех', 'тылюбишьхим', 'тебенравитсяхим', 'тебенравитсяхимтех', 'ахимтехнравится')

    compliment_message = ('тыкрутой', 'тымненравишься', 'тыхороший', 'тысупер', 'крутой')

    condolences_message = ('мнетебяжаль', 'ятебесочуствую', 'тысправишься', 'ятебесожалею', 'сожалею', 'соболезную', 'жаль', 'жальтебя')
    
    def echo(self, message):
        self.message = message
        
        return self.message
    
    def dialog(self, message):
        self.message = message
    
        # preparing a message
        message = pm.prepare_message(message)

        # greeting
        if message in self.greeting_message:
            return f'{settings.GREETING_MESSAGE} {settings.BOT_NAME}'
        
        # mood
        if message in self.mood_message:
            return f'{settings.MOOD_MESSAGE}'
        
        # farewell
        if message in self.farewell_message:
            return f'{settings.FAREWELL_MESSAGE}'
        
        # ISUCT message: different phrases and slogans
        if message in self.isuct_message:
            return f'{settings.ISUCT_MESSAGE}'
        
        # compliment
        if message in self.compliment_message:
            return f'{settings.COMPLIMENT_MESSAGE}'
        
        # condolences
        if message in self.condolences_message:
            return f'{settings.CONDOLENCES_MESSAGE}'

        return f'{settings.DIFFERENT_MESSAGE}'
    
    def context_save(self, message):
        self.message = message

        self.context = []

        # save context message
        self.context.append(message)
        

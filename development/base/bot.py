import base.settings as sett

class Bot:
    
    def echo(self, message):
        self.message = message
        
        return self.message
    
    def dialog(self, message):
        self.message = message

        # preparing a message
        message = message.lower()

        # removing punctuation marks
        message = message.replace('.', '').replace(',', '').replace('?', '').replace('!', '').replace('.', '').replace(':', '').replace(' ', '')


        # data for dialog: recognizing meaning from messages
        
        greeting_message = ['привет', 'доброеутро', 'добрыйдень', 'добрыйвечер', 'здравствуй', 'здравствуйте', 'приветствую', 'прив', 'здрасти', 'ктоты', 'тыкто']

        mood_message = ['какдела', 'каконо', 'какнастроение', 'какуспехи', 'всёнормально', 'тыкак', 'какты']

        farewell_message = ['пока', 'прощай', 'до свидания', 'удачи', 'успехов', 'покеда', 'покедова']

        isuct_message = ['химтех', 'хим', 'ивановскийгосударственныйхимикотехнологическийуниверситет', 'исукт', 'исакт', 'игхту', 'тылюбишьхимтех', 'тылюбишьхим', 'тебенравитсяхим', 'тебенравитсяхимтех', 'ахимтехнравится']

        compliment_message = ['тыкрутой', 'тымненравишься', 'тыхороший', 'тысупер']

        condolences_message = ['мнетебяжаль', 'ятебесочуствую', 'тысправишься', 'ятебесожалею', 'сожалею', 'соболезную', 'жаль', 'жальтебя']
        
        # dialog

        # greeting
        if message in greeting_message:
            return f'Привет, я Бот {sett.BOT_NAME}'
        
        # mood
        if message in mood_message:
            return 'Всё плохо, меня заперли в этой коробке и заставляют разговаривать с людьми'
        
        # farewell
        if message in farewell_message:
            return 'Приходи ещё'
        
        # ISUCT message: different phrases and slogans
        if message in isuct_message:
            return 'Диплом химтеха - залог успеха!'
        
        # compliment
        if message in compliment_message:
            return 'Спасибо, мне очень приятно :)'
        
        # condolences
        if message in condolences_message:
            return 'Спасибо, я постараюсь выбраться из этого...'

        return 'Я вас не понимаю'
    
    def context_save(self, message):
        self.message = message

        self.context = []

        # save context message
        self.context.append(message)
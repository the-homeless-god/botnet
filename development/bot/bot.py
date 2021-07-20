class Bot:

    def echo(self, message):
        self.message = message
        
        return self.message
    
    def dialog(self, message):
        self.message = message
  
    def dialog(self, message):
        self.message = message.lower()

        """data for dialog: recognizing meaning from messages"""
        
        greeting_message = ['привет', 'доброеутро', 'добрыйдень', 'добрыйвечер', 'здравствуй', 'здравствуйте', 'приветствую', 'прив', 'здрасти', 'ктоты', 'тыкто']

        mood_message = ['как дела', 'каконо', 'какнастроение', 'какуспехи', 'всёнормально']

        farewell_message = ['пока', 'прощай', 'до свидания', 'удачи', 'успехов']

        isuct_message = ['химтех', 'хим', 'ивановскийгосударственныйхимико-технологическийуниверситет', 'исукт', 'исакт', 'игтху']

        """dialog"""

        # greeting
        if message in greeting_message:
            return 'Привет, я бот Name'
        
        # mood
        if message in mood_message:
            return 'Всё плохо, меня заперли в этой коробке и заставляют разговаривать с людьми'
        
        # farewell
        if message in farewell_message:
            return 'Приходи ещё'
        
        # ISUCT message: different phrases and slogans
        if message in isuct_message:
            return 'Диплом химтеха - залог успеха!'

        return 'Я вас не понимаю'
    
    def context_save(self, message):
        self.message = message

        context = []

        """save context message"""
        context.append(message)

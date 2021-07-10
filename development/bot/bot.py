class Bot:
  
    def dialog(self, message):
        self.message = message.lower()


        """data for dialog: recognizing meaning from messages"""
        
        greeting_message = ['привет', 'добрый утро', 'добрый день', 'добрый вечер', 'здравствуй', 'здравствуйте', 'приветствую']

        mood_message = ['как дела', 'как оно', 'как настроение', 'как успехи', 'всё нормально']

        farewell_message = ['пока', 'прощай', 'до свидания', 'удачи', 'успехов']

        """dialog"""
        if message in greeting_message:
            return 'Привет, я бот Name'
        
        if message in mood_message:
            return 'Всё плохо, меня заперли в этой коробке и заставляют разговаривать с людьми'
        
        if message in farewell_message:
            return 'Приходи ещё'

        return 'Я вас не понимаю'
   
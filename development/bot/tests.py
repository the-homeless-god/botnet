import unittest

from base.bot import Bot

class Test_Bot(unittest.TestCase):

    bot = Bot()

    def test_dialog_greeting(self):
        self.assertEqual(self.bot.dialog('Привет!'), 'Привет, я Бот Nikita')
    
    def test_dialog_mood(self):
        self.assertEqual(self.bot.dialog('Как дела?'), 'Всё плохо, меня заперли в этой коробке и заставляют разговаривать с людьми')
    
    def test_dialog_farewell(self):
        self.assertEqual(self.bot.dialog('Пока'), 'Приходи ещё')
    
    def test_dialog_isuct(self):
        self.assertEqual(self.bot.dialog('Хим'), 'Диплом химтеха - залог успеха!')
    
    def test_dialog_compliment(self):
        self.assertEqual(self.bot.dialog('Крутой'), 'Спасибо, мне очень приятно :)')
    
    def test_dialog_condolences(self):
        self.assertEqual(self.bot.dialog('Сожалею'), 'Я постараюсь выбраться из этого :(')
    
    def test_dialog_different(self):
        self.assertEqual(self.bot.dialog('Белиберда!'), 'Я вас не понимаю :(')

if __name__ == "__main__":
    unittest.main()

import unittest

from base.bot import Bot

class Test_Bot(unittest.TestCase):

    bot = Bot()

    def test_dialog_greeting(self):
        self.assertEqual(self.bot.dialog('Привет!'), 'Привет, я Бот Nikita')
    
    def test_dialog_mood(self):
        self.assertEqual(self.bot.dialog('Как дела?'), 'Всё плохо, меня заперли в этой коробке и заставляют разговаривать с людьми')
    
if __name__ == "__main__":
    unittest.main()

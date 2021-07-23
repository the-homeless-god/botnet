import server

import telebot
import settings

# connecting the Bot - pyTelegramBotApi
bot = telebot.TeleBot(settings.TELEGRAM_TOKEN)

# defining the message type
@bot.message_handler(content_types=['text'])
def get_text_messages(message):
    bot.send_message(message.from_user.id, server.Server(message.text))

# launch the Bot
bot.polling(none_stop = True)

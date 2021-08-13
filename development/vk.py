import vk_api
from vk_api.longpoll import VkLongPoll, VkEventType

from commands.server import server, Server
import settings

import random

def write_message(user_id, message):
    vk.method('messages.send', {'user_id': user_id, 'message': message, 'random_id': random.getrandbits(64)})

# We log in as a community
vk = vk_api.VkApi(token=settings.VK_TOKEN)

# Working with messages
longpoll = VkLongPoll(vk)

# main cycle
for event in longpoll.listen():

    if event.type == VkEventType.MESSAGE_NEW:
    
        if event.to_me:

            write_message(event.user_id, server.server_user(event.text))
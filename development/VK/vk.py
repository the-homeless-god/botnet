import random
import vk_api
from vk_api.longpoll import VkLongPoll, VkEventType

def write_msg(user_id, message):
    vk.method('messages.send', {'user_id': user_id, 'message': message, 'random_id': random.getrandbits(64)})

token = ""

vk = vk_api.VkApi(token=token)

longpoll = VkLongPoll(vk)

for event in longpoll.listen():

    if event.type == VkEventType.MESSAGE_NEW:
    
        if event.to_me:
        
            request = event.text

            write_msg(event.user_id, "Нello world")

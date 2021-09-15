def prepare_message(message):
    message = message.replace('.', '').replace(',', '').replace('?', '').replace('!', '').replace('.', '').replace(':', '').replace(' ', '').lower()
    
    return message
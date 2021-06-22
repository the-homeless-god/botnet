import random

class Bot:
    
    def echo(self, message):
        self.message = message
        print(f'Bot: {self.message}')
    
class Adapter():
    def __init__(self):
        pass

def main():
    flag = True
    bot = Bot()

    while(flag == True):
        message = input()
        bot.echo(message)
    
main()
    

        
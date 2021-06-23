class Bot:
    
    def echo(self, message):
        self.message = message
        print(f'Bot: {self.message}')
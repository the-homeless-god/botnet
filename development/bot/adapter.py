from bot import Bot

class Adapter(Bot):
    def get_echo(self, message):
        self.message = message

        return str(self.dialog(message))

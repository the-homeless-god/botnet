# botnet-development

Environment for development based on image for virtual machine or on-premise

## Installing used packages

`pip install -r requirements.txt`

### [Documentation on creating a virtual environment](https://linuxize.com/post/how-to-create-python-virtual-environments-on-ubuntu-18-04/)

## Requirements

- [unittest 3.10.1 version](https://docs.python.org/3/library/unittest.html)

- [pyTelegramBotAPI 3.6 version](https://pypi.org/project/pyTelegramBotAPI/)

- [dotenv 0.10.1 version](https://pypi.org/project/python-dotenv/)

- [waitress 2.0.0 version](https://docs.pylonsproject.org/projects/waitress/en/stable/index.html)

## Tokens for Bot: where to get them  

1. Для начала нужно зайти в "группы" -> "создать сообщество".  

2. Выберите любой тип сообщества, тематику группы и введите название.

3. На открывшейся странице выберите "Работа с API", далее необходимо создать API-ключ.

4. Выберите нужные параметры доступа для вашего ключа.

5. Возможно придется подтвердить действие в VK с помощью мобильного телефона.

6. Скопируйте сгенерированный API-ключ в файл `.env`.

7. Не забудьте разрешить присылать Вашему Боту сообщения, чтобы это сделать переходим в "сообщения" и включаем их.

### Launch

`python waitress_server.py`

### On-premise

- [Alacritty](https://github.com/alacritty/alacritty)
- [Docker](https://www.docker.com)
- [OpenSSH](https://www.openssh.com)
- [Tmux](https://github.com/tmux/tmux)
- [Vim](https://www.vim.org)
- [Visual Studio Code](https://code.visualstudio.com)

### Virtual Machine

- [VirtualBox](https://www.virtualbox.org)

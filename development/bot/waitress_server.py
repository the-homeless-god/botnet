from waitress import serve
import vk
import telegram

serve(vk.py, host='0.0.0.0', port=8080)

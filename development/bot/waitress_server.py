from waitress import serve
import vk

serve(vk.py, host='0.0.0.0', port=8080)

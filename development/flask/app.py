from flask import Flask, render_template, url_for, request

from server import Server

app = Flask(__name__)

@app.route("/")
def home():    
    return render_template("index.html") 

@app.route("/get")
def get_bot_response():    
    userText = request.args.get('msg')    
    return str(Server(userText))

if __name__ == "__main__":
    app.run(debug=True)
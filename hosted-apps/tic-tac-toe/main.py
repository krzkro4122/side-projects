from flask import Flask, render_template, url_for

app = Flask(__name__)


@app.route("/")
def hello_world():
    url_for('static', filename='style.css')
    return render_template('index.html')

@app.route("/tic-tac-toe")
def tic_tac_toe():
    url_for('static', filename='style.css')
    return render_template('index.html')


app.run(host='0.0.0.0', port=5005)

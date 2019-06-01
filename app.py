from flask import Flask
from datetime import datetime
app = Flask(__name__)


@app.route('/')
def homepage():
    the_time = datetime.now().strftime("%d/%m/%y")

    return ('<h1>Hello heroku</h1>'
            f'<p>It is currently {the_time}.</p>'
            '<img src="http://loremflickr.com/600/400" />')


if __name__ == '__main__':
    app.run(debug=True, use_reloader=True)

import flask
from utils import user
app = flask.Flask("__name__")
user = user.User('User')
@app.route('/')
def index():
    return flask.render_template('index.html', user=user)

@app.route('/settings')
def settings():
    return flask.render_template('settings.html', user=user)

app.run(debug=True)

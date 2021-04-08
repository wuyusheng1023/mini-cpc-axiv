from flask import Flask, jsonify

from services import get_sql_data


app = Flask(__name__)


@app.route("/api/data", methods=['GET'])
def get_data():
  data = get_sql_data()
  return jsonify(data)

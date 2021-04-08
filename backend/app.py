from flask import Flask, jsonify


app = Flask(__name__)


@app.route("/api/data", methods=['GET'])
def get_data():
  data = {
    'temp_sat': 40,
    'temp_con': 20,
    'temp_opt': 42,
    'flow': 200,
    'conc': 1000,
  }
  return jsonify(data)

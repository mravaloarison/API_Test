from flask import Flask, jsonify
import requests, json
import google.generativeai as genai
import os
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


genai.configure(api_key=os.getenv("GEMINI_API_KEY"))


@app.route("/")
def hello_world():
    return jsonify({"message": "Hello, World!"})


@app.route("/ping")
def ping():
    return jsonify({"message": "pong!"})


@app.route("/hello_gemini")
def hello_gemini():
    model = genai.GenerativeModel("gemini-1.5-flash")
    response = model.generate_content("Write one random sentence")

    return jsonify({"ai_response": response.text})


@app.route("/all_pokemons")
def all_pokemons():
    url = "https://pokeapi.co/api/v2/pokemon"

    response = requests.get(url)

    my_pokemons = response.json()

    return jsonify({"first_pokemon": my_pokemons})
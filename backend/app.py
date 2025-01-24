from flask import Flask, jsonify
import requests, json
import google.generativeai as genai
import os


app = Flask(__name__)
# os.getenv("GEMINI_API_KEY")
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
    response = model.generate_content("Say hi to dera")

    return jsonify({"ai_response": response.text})

@app.route("/all_pokemons")
def all_pokemons():
    url = "https://pokeapi.co/api/v2/pokemon"

    response = requests.get(url)

    my_pokemons = response.json()

    pokemon1 = my_pokemons["results"][0]["name"]

    return jsonify({"first_pokemon": pokemon1})
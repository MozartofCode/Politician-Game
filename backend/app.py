# @Author: Bertan Berker
# @Language: Python - Flask Backend
# This is the backend file that makes API calls to the Congress API to get member name and parties

# Import necessary modules
import requests
from flask import Flask, jsonify
from flask_cors import CORS

# Define the base URL and API key
base_url = "https://api.congress.gov/v3/member?api_key="
api_key = ""

# Construct the complete URL
url = base_url + api_key

# Create a Flask app
app = Flask(__name__)
CORS(app)

# Define a route to handle GET requests to '/candidates'
@app.route('/candidates', methods=['GET'])
def get_members():
    # Make a GET request to the API
    response = requests.get(url)

    # Check if the request was successful (status code 200)
    if response.status_code == 200:
        id = 1
        politicians = []
        data = response.json()

        # Extract information about members from the API response
        members = data.get("members", [])
        for member in members:
            member_name = member.get("name")
            member_party = member.get("partyName")
            imageUrl = member.get("depiction", {}).get("imageUrl", "")
            politicians.append({"id": id, "name": member_name, "party": member_party, "imageUrl": imageUrl})
            id += 1

        # Return the information as JSON
        return jsonify(politicians)

    else:
        # Print an error message if the request was not successful
        print(f"Error: {response.status_code}")

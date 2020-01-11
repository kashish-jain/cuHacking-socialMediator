import os
import requests
from flask import Flask, session, render_template, request, jsonify
from flask_session import Session
from sqlalchemy import create_engine
from sqlalchemy.orm import scoped_session, sessionmaker
from flask_cors import CORS, cross_origin


#  For google cloud api
from google.cloud import language
from google.cloud.language import enums
from google.cloud.language import types

# Google cloud API functions

def print_result(annotations):
    score = annotations.document_sentiment.score
    magnitude = annotations.document_sentiment.magnitude

    for index, sentence in enumerate(annotations.sentences):
        sentence_sentiment = sentence.sentiment.score
        print('Sentence {} has a sentiment score of {}'.format(
            index, sentence_sentiment))

    print('Overall Sentiment: score of {} with magnitude of {}'.format(
        score, magnitude))
    return 0

def analyze(content):
    """Run a sentiment analysis request on text within a passed filename."""
    client = language.LanguageServiceClient()

    document = types.Document(
        content=content,
        type=enums.Document.Type.PLAIN_TEXT)
    annotations = client.analyze_sentiment(document=document)
    score = annotations.document_sentiment.score

analyze("The movie was very bad. I did not like it at all. These people should be banned")
# Main app is here

app = Flask(__name__)
CORS(app)

@app.route("/")
def index():
    return jsonify({'data' : 'It is now working!'})
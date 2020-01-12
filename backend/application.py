import os
import requests
import json
from flask import Flask, session, render_template, request, jsonify
from flask_session import Session
from flask_cors import CORS, cross_origin


#  For google cloud api
#from google.cloud import language
#from google.cloud.language import enums
#from google.cloud.language import types

# Google cloud API functions

#def print_result(annotations):
    #score = annotations.document_sentiment.score
    #magnitude = annotations.document_sentiment.magnitude

    #for index, sentence in enumerate(annotations.sentences):
        #sentence_sentiment = sentence.sentiment.score
        #print('Sentence {} has a sentiment score of {}'.format(
            #index, sentence_sentiment))

    #print('Overall Sentiment: score of {} with magnitude of {}'.format(
        #score, magnitude))
    #return 0

#def analyze(content):
    #"""Run a sentiment analysis request on text within a passed filename."""
    #client = language.LanguageServiceClient()

    #document = types.Document(
        #content=content,
        #type=enums.Document.Type.PLAIN_TEXT)
    #annotations = client.analyze_sentiment(document=document)
    #score = annotations.document_sentiment.score
    #return score

file = open("tweets.txt", "r")
data = file.read()
data = data.split('\n\n{"created_at"')
tweets_dict = {}
i = 1
for j in range(1, len(data)):
    data[j] = '{"created_at"' + data[j]
for tweet in data:
    print (tweet)
    tweet_obj = json.loads(tweet)
    print (tweet_obj)
    tweet_dict = {}
    tweet_dict["created_at"] = tweet_obj["created_at"]
    tweet_dict["geolocation"] = tweet_obj["user"]["location"]
    #tweet_dict["analyzation"] = analyze(tweet_obj["text"])
    tweet_dict["text"] = tweet_obj["text"]
    tweets_dict[str(i)] = tweet_dict
    i = i + 1
       
file.close()

print(tweets_dict)



#analyze("The movie was very bad. I did not like it at all. These people should be banned")
# Main app is here

app = Flask(__name__)
CORS(app)

@app.route("/")
def index():
    tweets_dict = jsonify(tweets_dict)
    print(tweets_dict)
    return tweets_dict
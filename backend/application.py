import os
import requests, json
from flask import Flask, session, render_template, request, jsonify
from flask_session import Session

from flask_cors import CORS, cross_origin
from text_classification import Tweet

# analyze("The movie was very bad. I did not like it at all. These people should be banned")
# tweet = Tweet("The RBC mobile app was not working yesterday. I tried clicking on buttons but it never works. They need to fix their app!!")
# print(tweet.tweet_type)

labels = {"atm":["atm", "automated teller machine", "machine"], "calls":["call", "voice", "contact"], "software": ["bug","screen", "breaks", "404", "online", "website", "app"], "hours": ["timing", "closed", "holiday"]}
def labelling(string):
    string = string.lower()
    for label in labels:
        for word in labels[label]:
            if string.find(word):
                return label
    return "none"

def prioritize(score, label):
    if (label == "none"):
        if (score < -0.5):
            return "high"
        elif (score < 0) :
            return "medium"
    return "low"
        
def read_tweet_file():
    tweets_dict = {}
    file = open("./Twitter/tweets.txt", "r")
    data = file.read()
    data = data.split('\n\n{"created_at"')
    i = 1
    for j in range(1, len(data)):
        data[j] = '{"created_at"' + data[j]
    for tweet in data:
        tweet_obj = json.loads(tweet)
        if len(tweet_obj["text"].split()) < 20:
            continue
        tweet_dict = {}
        tweet_dict["created_at"] = tweet_obj["created_at"]
        tweet_dict["geolocation"] = tweet_obj["user"]["location"]
        #tweet_dict["analyzation"] = analyze(tweet_obj["text"])
        tweet_dict["text"] = tweet_obj["text"]
        tweet_data = Tweet(tweet_obj["text"])

        tweet_dict["sentiment_score"] = tweet_data.sentiment_score
        tweet_dict["category"] = tweet_data.tweet_type
        tweet_dict["label"] = labelling(tweet_obj["text"])
        tweet_dict["priority"] = prioritize(tweet_dict["sentiment_score"],tweet_dict["label"])
        
        tweets_dict[str(i)] = tweet_dict
        i = i + 1
        
    file.close()
    return tweets_dict
    


app = Flask(__name__)
CORS(app)

@app.route("/")
def index():
    tweets_dict = jsonify(read_tweet_file())
    # print(tweets_dict)
    return tweets_dict

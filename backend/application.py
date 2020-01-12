import os
import requests, json
from flask import Flask, session, render_template, request, jsonify
from flask_session import Session
from sqlalchemy import create_engine
from sqlalchemy.orm import scoped_session, sessionmaker

from flask_cors import CORS, cross_origin
from text_classification import Tweet

# analyze("The movie was very bad. I did not like it at all. These people should be banned")
# tweet = Tweet("The RBC mobile app was not working yesterday. I tried clicking on buttons but it never works. They need to fix their app!!")
# print(tweet.tweet_type)

slackURL = "https://slack.com/api/chat.postMessage"
slackToken = "xoxp-593464896096-892373395681-902891260848-4959e8e58580fa5296dfc4064b71eb34"

headers = {
  "Content-Type": "application/json",
  "Authorization": "Bearer {0}".format(slackToken)
}

# Check for environment variable
if not os.getenv("DATABASE_URL"):
    raise RuntimeError("DATABASE_URL is not set")

# Set up database
engine = create_engine(os.getenv("DATABASE_URL"))
db = scoped_session(sessionmaker(bind=engine))

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
        tweets_dict[str(i)] = tweet_dict
        i = i + 1
        
    file.close()
    return tweets_dict

def send_message(message_text):
    print("test")
    message = {
    "channel": "#uwteam",
    "text": message_text
    }

    requests.post(slackURL, headers=headers, data=json.dumps(message)) 


app = Flask(__name__)
CORS(app)

@app.route("/")
def index():
    tweets_dict = jsonify(read_tweet_file())
    # print(tweets_dict)
    return tweets_dict

@app.route('/reviews', methods = ['POST'])
def email():
    if request.method == 'POST':
        data = request.body
        print(request)
        # db.execute("INSERT INTO reviews (username, review) VALUES (:username, :review)",
        #     {"username": "test", "review": "test123"})
        # db.commit()
    return "good"

@app.route('/slack', methods = ['POST'])
def slackMessage():
    if request.method == 'POST':
        request_json = request.get_json()
        send_message(request_json)

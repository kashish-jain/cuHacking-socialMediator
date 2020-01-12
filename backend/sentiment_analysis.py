#  For google cloud api
from google.cloud import language
from google.cloud.language import types
from google.cloud import language_v1
from google.cloud.language_v1 import enums

# Google cloud API functions
class SentimentAnalyze():
    def __init__(self, tweet):
        self.tweet = tweet
        self.analyze(tweet.tweet_text)

    def print_result(self, annotations):
        score = annotations.document_sentiment.score
        magnitude = annotations.document_sentiment.magnitude

        for index, sentence in enumerate(annotations.sentences):
            sentence_sentiment = sentence.sentiment.score
            print('Sentence {} has a sentiment score of {}'.format(
                index, sentence_sentiment))

        print('Overall Sentiment: score of {} with magnitude of {}'.format(
            score, magnitude))
        return 0

    def analyze(self, content):
        """Run a sentiment analysis request on text within a passed filename."""
        client = language.LanguageServiceClient()

        document = types.Document(
            content=content,
            type=enums.Document.Type.PLAIN_TEXT)
        annotations = client.analyze_sentiment(document=document)
        score = annotations.document_sentiment.score
        self.print_result(annotations)
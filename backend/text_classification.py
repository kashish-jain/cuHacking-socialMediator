from google.cloud import language
from google.cloud.language import types
from google.cloud import language_v1
from google.cloud.language_v1 import enums

TECH = ['/Internet', '/Autos', '/Computers']
class Tweet(object):
    def __init__(self, tweet_text):
        self.tweet_type = ''
        self.sentiment_score = 0
        self.tweet_text = tweet_text
        self.sample_classify_text(tweet_text)
        self.analyze(tweet_text)

    def sample_classify_text(self, text_content):
        """
        Classifying Content in a String

        Args:
        text_content The text content to analyze. Must include at least 20 words.
        """

        client = language_v1.LanguageServiceClient()

        # text_content = 'That actor on TV makes movies in Hollywood and also stars in a variety of popular new TV shows.'

        # Available types: PLAIN_TEXT, HTML
        type_ = enums.Document.Type.PLAIN_TEXT

        # Optional. If not specified, the language is automatically detected.
        # For list of supported languages:
        # https://cloud.google.com/natural-language/docs/languages
        language = "en"
        document = {"content": text_content, "type": type_, "language": language}

        response = client.classify_text(document)
        # Loop through classified categories returned from the API
        for category in response.categories:
            # Get the name of the category representing the document.
            # See the predefined taxonomy of categories:
            # https://cloud.google.com/natural-language/docs/categories
            # print(u"Category name: {}".format(category.name))
            # Get the confidence. Number representing how certain the classifier
            # is that this category represents the provided text.
            # print(u"Confidence: {}".format(category.confidence))
            # Set tweet type
            if category.name.split()[0] in TECH:
                self.tweet_type = 'Technical'
            else:
                self.tweet_type = 'Non-technical'

    def print_result(self, annotations):
        score = annotations.document_sentiment.score
        magnitude = annotations.document_sentiment.magnitude

        for index, sentence in enumerate(annotations.sentences):
            sentence_sentiment = sentence.sentiment.score
            print('Sentence {} has a sentiment score of {}'.format(
                index, sentence_sentiment))

        print('Overall Sentiment: score of {} with magnitude of {}'.format(
            score, magnitude))
        self.sentiment_score = score
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
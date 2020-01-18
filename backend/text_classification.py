from google.cloud import language
from google.cloud.language import types
from google.cloud import language_v1
from google.cloud.language_v1 import enums

TECH = ['/Internet', '/Autos', '/Computers']
class Tweet(object):
    def __init__(self, tweet_text):
        self.tweet_type = 'Technical'
        self.sentiment_score = 0
        self.tweet_text = tweet_text
        self.sample_classify_text(tweet_text)
        self.analyze(tweet_text)
    
    def classify(self, text, verbose=True):
        """Classify the input text into categories. """
        try:
            language_client = language.LanguageServiceClient()

            document = language.types.Document(
                content=text,
                type=language.enums.Document.Type.PLAIN_TEXT)
            response = language_client.classify_text(document)
            categories = response.categories

            result = {}

            for category in categories:
                # Turn the categories into a dictionary of the form:
                # {category.name: category.confidence}, so that they can
                # be treated as a sparse vector.
                result[category.name] = category.confidence

            if verbose:
                print(text)
                for category in categories:
                    print(u'=' * 20)
                    print(u'{:<16}: {}'.format('category', category.name))
                    print(u'{:<16}: {}'.format('confidence', category.confidence))
                    if category.name.split()[0] not in TECH:
                        self.tweet_type = 'Non-technical'

            return result
        except Exception as e:
            return

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
        print(response.categories)
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
            print(category.name)
            if category.name.split()[0] not in TECH:
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
        try:
            client = language.LanguageServiceClient()

            document = types.Document(
                content=content,
                type=enums.Document.Type.PLAIN_TEXT)
            annotations = client.analyze_sentiment(document=document)
            score = annotations.document_sentiment.score
            self.print_result(annotations)
        except Exception as e:
            return

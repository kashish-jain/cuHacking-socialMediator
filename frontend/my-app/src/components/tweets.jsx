import React, { Component } from 'react';
import IndividualTweet from './individualTweet';

let Tweets = (props) => {
    // const element = <FontAwesomeIcon icon={faTwitter} />

        let tweet;
        let allTweets = [];
        Object.keys(props.tweets).forEach(function (item) {
            tweet = <IndividualTweet tweet = {props.tweets[item]["text"]} key={item} />
            allTweets.push(tweet);
        });

        return (
            <div>
                
                {allTweets}
            </div>
        );
}

export default Tweets;
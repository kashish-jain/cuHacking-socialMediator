import React, { Component } from 'react';
import IndividualTweet from './individualTweet';

let Tweets = (props) => {
    // const element = <FontAwesomeIcon icon={faTwitter} />

        let tweet;
        let allTweets = [];
        Object.keys(props.tweets).forEach(function (item) {
            console.log("item ", item);
            tweet = <IndividualTweet tweet = {props.tweets[item]} key={item} />
            allTweets.push(tweet);
        });

        return (
            <div>
                
                {allTweets}
            </div>
        );
}

export default Tweets;
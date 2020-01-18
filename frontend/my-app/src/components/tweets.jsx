import React, { Component } from 'react';
import IndividualTweet from './individualTweet';

let Tweets = (props) => {

    let tweet;
    let allTweets = [];
    Object.keys(props.tweets).forEach(function (item) {
        if (props.tweets[item]["sentiment_score"] < -0.5) {
            tweet = <IndividualTweet tweet={props.tweets[item]["text"]} date={props.tweets[item]["created_at"]} key={item} />
            allTweets.push(tweet);
        }

    });

    return (
        <div>
            <h1 style={{marginLeft: "1%"}}>Tweets which require your attention</h1>
            {allTweets}
        </div>
    );
}

export default Tweets;
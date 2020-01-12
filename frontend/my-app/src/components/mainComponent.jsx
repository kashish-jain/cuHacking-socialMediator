import React, { Component } from 'react';
import TwitterCharts from './twitterCharts';
import Tweets from './tweets';

class MainComponent extends Component {
    render() {
        let trialJson = {"first": "this is the first tweet", "second" : "this is the second tweet"}
        return (
            <div>
                <TwitterCharts/>
                <Tweets tweets = {trialJson}/>
            </div>
        );
    }
}

export default MainComponent;
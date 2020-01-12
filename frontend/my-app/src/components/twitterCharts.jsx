import React, { Component } from 'react';
import DoughnutChart from './DoughnutChart';
import LineChart from './lineChart'

function getScores(values) {
    let data = [];
    Object.keys(values).forEach(function (item) {
        let tweet = values[item]["sentiment_score"];
        data.push(tweet);
    });
    return data;
}

function getDates(values) {
    let data = [];
    Object.keys(values).forEach(function (item) {
        let tweet = values[item]["created_at"];
        data.push(tweet);
    });
    return data;
}

function countNonTechnical(values) {
    let count = 0;
    Object.keys(values).forEach(function (item) {
        let tweet = values[item]["category"];
        if (tweet === "Non-technical") {
            ++count;
        }
    });
    return count;
}

class TwitterCharts extends Component {

    constructor(props) {
        super(props);
        console.log("from twittercharts", this.props.tweets);
    }
    render() {
        let scores = getScores(this.props.tweets);
        let dates = getDates(this.props.tweets);
        let nonTechnical = countNonTechnical(this.props.tweets);
        return (
            <div className="main-chart" style={{ display: "flex" }}>
                <DoughnutChart technical={this.props.tweets.length - nonTechnical} nonTechnical = {nonTechnical} />
                <LineChart scores={scores} dates={dates} />
            </div>
        );
    }
}

export default TwitterCharts;
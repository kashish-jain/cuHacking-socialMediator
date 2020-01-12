import React, { Component } from 'react';
import DoughnutChart from './DoughnutChart';
import LineChart from './lineChart'
import PieChart from './pieChart'


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
        let date = values[item]["created_at"];
        let plusIndex = date.indexOf("+");
        date = date.substring(0, plusIndex);
        data.push(date);
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
    }
    render() {
        let scores = getScores(this.props.tweets);
        let dates = getDates(this.props.tweets);
        let nonTechnical = countNonTechnical(this.props.tweets);
        return (
            <div className="main-chart" style={{ display: "flex",   flexWrap: "wrap"
        }}>
                <DoughnutChart technical={this.props.tweets.length - nonTechnical} nonTechnical = {nonTechnical} />
                <LineChart scores={scores} dates={dates} />
                <PieChart data = {[3,1,0,1,2]} />
            </div>
        );
    }
}

export default TwitterCharts;
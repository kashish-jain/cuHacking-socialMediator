import React, { Component } from 'react';
import BarChart from './DoughnutChart';
import LineChart from './lineChart'

class TwitterCharts extends Component {

    constructor(state, props) {
        super(props);
    }
    render() {
        return (
            <div className="main-chart" style={{display: "flex"}}>
                <BarChart/>
                <LineChart/>
            </div>
        );
    }
}

export default TwitterCharts;
import React, { Component } from 'react';
import {Line, Pie} from 'react-chartjs-2'; 

class LineChart extends Component {
    constructor(state, props) {
        super(props);
        this.state = {
            chartData: {
                labels: ["bost", "skhfis", "skfuh", "fskfh"],
                datasets: [
                    {
                        label: 'Customer',
                        data: [
                            -0.9,
                            .07,
                            0.3,
                            -0.2
                        ]
                    }
                ],
            }
        }
    }
    render() {
        return (
            <div className="chart" style={{ width: "50vw", padding: "3%" }}>
                <Line
                    data={this.state.chartData}
                    options={{
                        maintainAspectRatio: true
                    }}
                />
            </div>
        );
    }
}


export default LineChart;
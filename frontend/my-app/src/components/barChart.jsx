import React, { Component } from 'react';
import {Doughnut, Line} from 'react-chartjs-2'; 

class DoughnutChart extends Component {
    constructor(state, props) {
        super(props);
        this.state = {
            chartData: {
                labels: ["bost", "skhfis"],
                datasets: [
                    {
                        data: [
                            3523,
                            3252
                        ]
                    }
                ]
            }
        }
    }
    render() {
        return (
            <div className="chart" style={{ width: "50vw", padding: "3%" }}>
                <Doughnut
                    data={this.state.chartData}
                    options={{
                        maintainAspectRatio: true
                    }}
                />
            </div>
        );
    }
}


export default DoughnutChart;
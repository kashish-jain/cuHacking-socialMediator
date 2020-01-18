import React, { Component } from 'react';
import {Line, Pie} from 'react-chartjs-2'; 


class LineChart extends Component {
    constructor(props) {
        super(props);
        let scores = this.props.scores;
        let dates = this.props.dates;
        this.state = {
            chartData: {
                labels: dates,
                datasets: [
                    {
                        label: "Customer's sentiment (1 = happiest, -1=sad)",
                        data: scores,
                        backgroundColor:'rgb(222, 221, 242)',
                        borderColor:'rgb(170, 170, 171)',
                        borderWidth: 1.5
                    
                    }
                ]
                
            }
        }
    }
    render() {
        return (
            <div className="chart" style={{ width: "50vw", padding: "3%" }}>
                <Line
                    data={this.state.chartData}
                    options={{
                        maintainAspectRatio: true,
                        title:{
                            display:true,
                            text:"Sentimental Analysis",
                            fontSize:25,
                            position:'bottom'
                        }
                    }}
                />
            </div>
        );
    }
}


export default LineChart;
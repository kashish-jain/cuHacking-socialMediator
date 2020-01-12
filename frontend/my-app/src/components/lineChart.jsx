import React, { Component } from 'react';
import {Line, Pie} from 'react-chartjs-2'; 

class LineChart extends Component {
    constructor(state, props) {
        super(props);
        this.state = {
            chartData: {
                labels: ["2 Days", "4 Days", "6 Days", "8 Days","10 Days"],
                datasets: [
                    {
                        label: 'Customer',
                        data: [ -0.9, .07, 0.3, -0.2, 0.9],
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
                            text:'Analyse past days',
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
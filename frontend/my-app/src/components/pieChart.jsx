import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';



class PieChart extends Component {
    constructor(props) {
        super(props);
    }



    render() {
        const data = {
            labels: [
                'Software',
                'None',
                'Calls/Telecom',
                'ATM',
                'Hours'
            ],
            datasets: [{
                data: this.props.data,
                backgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56',
                    '#FC2A3B',
                    '#A3ABCC'
                ],
                hoverBackgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56',
                    '#AABBCC',
                    '#CAB123'
                ]
            }]
        };
        return (
            <div style={{ width: "40vw" }}>
                {/* <h2>Pie Example</h2> */}
                <Pie data={data}
                    options={{
                        maintainAspectRatio: true,
                        title: {
                            display: true,
                            text: "Categorization",
                            fontSize: 25,
                            position: 'bottom'
                        }
                    }}
                />
            </div>
        );
    }
}




export default PieChart;
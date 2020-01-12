import React, { Component } from 'react';
import TwitterCharts from './twitterCharts';
import bank from './bank.png'

class MainComponent extends Component {
    render() {
        return (
            
            <div className="main">
                <div className="bank-img">
                <img src={bank} alt="" srcset=""/>
                </div>
                <div className="page-title">
                <h1 style={{textAlign:"center",fontSize:"50px",backgroundColor:"rgb(227, 251, 251)",letterSpacing:"2px"}}>RBC Customer Review </h1>
                </div>
                
                <TwitterCharts/>
            </div>
        );
    }
}

export default MainComponent;
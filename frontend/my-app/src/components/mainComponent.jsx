import React, { Component } from "react";
import TwitterCharts from "./twitterCharts";
import bank from "./bank.png";
import Tweets from "./tweets";

class MainComponent extends Component {
  render() {
    let trialJson = {
      first: "this is the first tweet",
      second: "this is the second tweet"
    };
    return (
      <div className="main">
        <div className="bank-img">
          <img src={bank} alt="" srcset="" />
        </div>
        <div className="page-title">
          <h1
            style={{
              textAlign: "center",
              fontSize: "50px",
              backgroundColor: "rgb(227, 251, 251)",
              letterSpacing: "2px"
            }}
          >
            RBC Customer Review
          </h1>
        </div>

        <div>
        <TwitterCharts />
        <Tweets tweets={trialJson} />

       
        </div>
      </div>
    );
  }
}

export default MainComponent;

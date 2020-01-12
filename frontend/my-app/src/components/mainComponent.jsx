import React, { Component } from "react";
import TwitterCharts from "./twitterCharts";

import Tweets from "./tweets";
// import 'bootstrap/dist/css/bootstrap.min.css';
class MainComponent extends Component {
  render() {
    let trialJson = {
      first: "RT @RyanAFournier: President Trump first killed Barack Obama\u2019s legacy.\n\nNow President Trump is killing the terrorists Barack Obama funded.",
      second: "RT @Selena_Adera: 14\/I'm a Democrat.\n\nI'm for the Party that signed Civil Rights into law, the Party of Equal Rights, Healthcare Reform, ec\u2026",
      third:"I don\u2019t give a tinkers damn if Democrats run a baboon against Trump, the Baboon gets my vote! #VoteBlueNoMatterWho",
      fourth:"RT @prageru: Barack Obama's #Iran nuclear deal was one of the worst agreements in history. \n\nIt awarded the world's largest funder of terro\u2026",
      fifth:"RT @charliekirk11: Bernie Sanders:\n\n\"The American Dream is more apt to be realized in Venezuela\"\n\n\"There are some things the USSR does bett\u2026"
    };
    return (
      <div className="main">
        <div className="bank-img">
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

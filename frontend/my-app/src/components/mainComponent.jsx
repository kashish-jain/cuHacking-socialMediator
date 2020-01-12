import React, { Component } from "react";
import TwitterCharts from "./twitterCharts";
import bank from "./bank.png";
import Tweets from "./tweets";

function graphObjects(bigJson) {
    console.log("bigJSON ", bigJson);
    let newObject = JSON.parse(bigJson);
    const values = Object.values(newObject);
    // Returning array of JSON Objects
    console.log("mainComponent", values);
    return values;
}

class MainComponent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let graphObj = graphObjects(this.props.bigData);
        console.log("graphObj", graphObj);
        return (
            <div className="main">
                <div className="bank-img">
                    <img src={bank} alt="" srcSet="" />
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
                    <TwitterCharts tweets={graphObj} />
                    <Tweets tweets={graphObj} />
                </div>
            </div>
        );
    }
}

export default MainComponent;

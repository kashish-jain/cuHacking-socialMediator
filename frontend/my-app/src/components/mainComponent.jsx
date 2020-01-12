import React, { Component } from "react";
import TwitterCharts from "./twitterCharts";
import Post from './post';
import Tweets from "./tweets";
import Alerts from "./alerts";
import SimpleMap from './simpleMap';

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
        return (
            <div className="main">
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
                    <Alerts />
                    <Post />
                    <SimpleMap/>        
                </div>
            </div>
        );
    }
}

export default MainComponent;

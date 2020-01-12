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
    return values;
}

function getLocations(graphObj) {
    let locationsArray = [];
    graphObj.forEach((item) => {
        let loca = item["geolocation"];
        locationsArray.push(loca);
    });
    return locationsArray;
}

class MainComponent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let graphObj = graphObjects(this.props.bigData);
        let locationsArray = getLocations(graphObj);
        console.log("here is ht fskufh ", locationsArray);
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
                    {/* <SimpleMap locations={locationsArray}/> */}
                </div>
            </div>
        );
    }
}

export default MainComponent;

import React, { Component } from "react";
import TwitterCharts from "./twitterCharts";
import Post from './post';
import Tweets from "./tweets";
import Alerts from "./alerts";
import SimpleMap from './simpleMap';

function graphObjects(bigJson) {
    let newObject = JSON.parse(bigJson);
    const values = Object.values(newObject);
    // Returning array of JSON Objects
    return values;
}

function getLocations(graphObj) {
    console.log("graphObj ", graphObj);
    let locationsArray = [];
    graphObj.forEach((item) => {
        let loca = item["geolocation"];
        locationsArray.push(loca);
    });
    console.log("locationsArray ", locationsArray);
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
                            letterSpacing: "2px",
                            fontWeight: "bolder"
                        }}
                    >
                        Social Mediator
          </h1>
                </div>

                <div>
                    <TwitterCharts tweets={graphObj} />
                    <Tweets tweets={graphObj} />
                    <Alerts />
                    <SimpleMap locations={locationsArray}/>
                    <Post />
                </div>
            </div>
        );
    }
}

export default MainComponent;

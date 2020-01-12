import React, { Component } from 'react';
import IndividualAlert from './individualAlert';


const API = 'http://127.0.0.1:5000/reviews';

class Alerts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiInfo: 'default'
    };
  }

  componentWillMount() {
    const that = this
    fetch(API)
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonData) {
        return JSON.stringify(jsonData);
      })
      .then(function (jsonStr) {
        jsonStr = JSON.parse(jsonStr)
        that.setState({ apiInfo: jsonStr });
      });
  }

  render() {
    let alerts_arr = [];
    if ((this.state.apiInfo != "default")) {
      let values = this.state.apiInfo;
      Object.keys(values).forEach(function (item) {
        let new_values = values[item];
        Object.keys(new_values).forEach(function (item) {
          let eachAlert = <IndividualAlert alert={new_values[item]["review"]} />
          alerts_arr.push(eachAlert);
        });

      })
    } else {
      console.log("default");
    }

    return (
      <div>
        {alerts_arr}
      </div>
    );
  }
}

export default Alerts;
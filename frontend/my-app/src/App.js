import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './components/mainComponent';
import MainComponent from './components/mainComponent';
const API = 'http://127.0.0.1:5000/';

class App extends Component {
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
        that.setState({ apiInfo: jsonStr });
      });
  }

  render() {
    let main;
    if (this.state.apiInfo != "default") {
      main = <div className="App">
        <MainComponent bigData={this.state.apiInfo} />
      </div>
    } else {
      main = <div className="App">
      Loading
    </div>
    }
    return (
      main
    );
  }
}
export default App;
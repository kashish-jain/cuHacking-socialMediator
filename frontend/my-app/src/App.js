import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
const API = 'http://127.0.0.1:5000/';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiInfo: 'default'
    };
  }
  componentDidMount() {
    // fetch(API)
    //   .then(response => response.json())
    //   .then(data => this.setState({ hits: data.hits }));
    const that = this
    fetch(API)
    .then(function(response) {
      return response.json();
    })
    .then(function(jsonData) {
        return JSON.stringify(jsonData);
    })
    .then(function(jsonStr) {
        that.setState({ apiInfo: jsonStr });
    });
    console.log(this.state)
  }

  render() {
    let result = this.state.apiInfo
    console.log(result)
    return (
      <div className="App">
        <h1 id="display">Display some text {result}</h1>
      </div>
    );
  }
}
export default App;
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
const API = 'https://hn.algolia.com/api/v1/search?query=';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hits: [],
    };
  }
  componentDidMount() {
    // fetch(API)
    //   .then(response => response.json())
    //   .then(data => this.setState({ hits: data.hits }));
    fetch('http://127.0.0.1:5000/')
    .then(function(response) {
        console.log(response.json())
        return response;
    })
    console.log("test")
  }

  render() {
    const { hits } = this.state;
    return (
      <div className="App">
        <h1 id="display">Display some text</h1>
      </div>
    );
  }
}
export default App;
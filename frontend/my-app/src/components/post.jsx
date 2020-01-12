
import React, { Component } from "react";
import axios from "axios";

class Post extends Component {
  state = {
    title: "",
    body: ""
  };

  onTitleChange = e => {
    this.setState({
      title: e.target.value
    });
  };

  onBodyChange = e => {
    this.setState({
      body: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    const data = {
      name: this.state.title,
      alert: this.state.body
    };
    axios
      .post("http://127.0.0.1:5000/reviews", {
        headers: {
            'Content-Type': 'application/json',
        },data
        })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="post" style={{height: "50vw", width: "50vh"}}>
        <form className="post" onSubmit={this.handleSubmit}>
          <input
            placeholder="Your Name" value={this.state.title}
            onChange={this.onTitleChange} required
          />
          <textarea
            placeholder="Alert" value={this.state.body}
            onChange={this.onBodyChange} required
          />
          <button type="submit">Create Post</button>
        </form>
      </div>
    );
  }
}

export default Post;
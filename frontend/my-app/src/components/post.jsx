
import React, { Component } from "react";
import axios from "axios";
import Form from 'react-bootstrap/Form';
import {Button} from 'react-bootstrap';

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
      // <div className="post" style={{height: "50vw", width: "50vh"}}>
      //   <form className="post" onSubmit={this.handleSubmit}>
      //     <input
      //       placeholder="Your Name" value={this.state.title}
      //       onChange={this.onTitleChange} required
      //     />
      //     <textarea
      //       placeholder="Alert" value={this.state.body}
      //       onChange={this.onBodyChange} required
      //     />
      //     <button type="submit">Create Post</button>
      //   </form>
      // </div>
      <div className="post" style={{position:"relative",margin:"10% 40%",height:"600px",width:"600px",backgroundImage:"linear-gradient(to right, rgba(119, 119, 119, 0.87), rgba(17, 13, 15, 0.87))",borderRadius:"2px",boxShadow: "10px 10px 5px grey"}}>
        <Form className="post" onSubmit={this.handleSubmit} style={{fontSize:"1.5rem",padding:"40px",color:"white",fontWeight:"bold",letterSpacing:"1px"}}>
          <Form.Group  md="4" >
            <Form.Label >Name</Form.Label>
            <Form.Control type="text" placeholder="Your Name" value={this.state.title} onChange={this.onTitleChange} required style={{fontSize:"1.2rem"}}/>
          </Form.Group>
          <Form.Group >
            <Form.Label >Alert</Form.Label>
            <Form.Control as="textarea" placeholder="Sorry for convenience..." rows="5" value={this.state.body}
            onChange={this.onBodyChange} style={{fontSize:"1.2rem"}} />
          </Form.Group>
          <Button type="submit" variant="dark" size="lg">Submit</Button>
          {/* <input
            placeholder="Your Name" value={this.state.title}
            onChange={this.onTitleChange} required
          />
          <textarea
            placeholder="Alert" value={this.state.body}
            onChange={this.onBodyChange} required
          /> */}
          
          {/* <button type="submit">Create Post</button> */}
        </Form>
      </div>



    );
  }
}

export default Post;
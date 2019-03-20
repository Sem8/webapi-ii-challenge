import React, { Component } from "react";

import "./App.css";

class App extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    this.getPosts();
  }

  getPosts = () => {
    fetch("http://localhost:4000/api/posts")
      .then(res => res.json())
      .then(res => this.setState({ posts: res }));
  };

  renderPost = ({ id, title, contents }) => (
    <div key={id}>
    <h1>{title}</h1>    
    <p>{contents}</p> 
    - - - - - -       
    </div>
  );
  render() {
    const { posts } = this.state;
    return (
      <div className="App">
        sanity
        {posts.map(this.renderPost)}
      </div>
    );
  }
}

export default App;

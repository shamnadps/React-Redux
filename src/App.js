import React, { Component } from "react";
import Posts from "./components/posts";
import PostForm from "./components/postform";
import logo from "./logo.svg";
import "./App.css";

import { Provider } from "react-redux";
import store from "./stores";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h3 className="App-title">Welcome to React</h3>
          </header>
          <PostForm />
          <Posts />
        </div>
      </Provider>
    );
  }
}

export default App;

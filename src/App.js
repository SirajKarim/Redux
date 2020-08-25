import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";
import store from "./basic";

class App extends Component {
  componentDidMount() {
    console.log(this.props);
    store.dispatch({
      type: "ADD TODO",
    });
  }
  componentWillReceiveProps(nextProps) {
    console.log("ComponentWillRecieveProps", nextProps);
  }
  render() {
    return (
      <div className="App">
        <h1>hello world</h1>
      </div>
    );
  }
}

function mapStatetoProps(state) {
  return {
    Todo: state.Todo.text,
  };
}
export default connect(mapStatetoProps, null)(App);

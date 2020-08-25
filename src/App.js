import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";
import store from "./basic";

function UpdateTodo() {
  return {
    type: "ADD TODO",
  };
}

class App extends Component {
  componentDidMount() {
    console.log(this.props);
    // store.dispatch({
    //   type: "ADD TODO",
    // });
    this.props.UpdateTodo();
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

function mapDispatchtoProps(dispatch) {
  return { UpdateTodo: (data) => dispatch(UpdateTodo(data)) };
}
export default connect(mapStatetoProps, mapDispatchtoProps)(App);

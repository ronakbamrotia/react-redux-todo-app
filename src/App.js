import React, { Component } from "react";
import "./App.css";
import Addtodosform from "./components/addTodoForm";
import TodoList from "./components/listOftodos";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStroopwafel } from "@fortawesome/free-solid-svg-icons";
import { getListOfTodos } from "../src/actions/todoActions";
import { connect } from "react-redux";
import TodoStatus from "../src/components/todoStatus";

import axios from "axios";

library.add(faStroopwafel);

class App extends Component {
  componentWillMount() {
    axios
      .get("/api/todos/gettodos")
      .then(todos => {
        this.callGetFunction(todos.data);
      })
      .catch(error => {
        //console.log(error);
        alert(error);
      });
  }

  callGetFunction(todos) {
    this.props.getTodos(todos);
  }
  render() {
    return (
      <div className="container">
        <div>
          <h1 className="todoHeading">TO-DO APP</h1>{" "}
        </div>
        <div className="mainContainer app ">
          <div>
            <Addtodosform />
            <TodoList />
            <TodoStatus />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = () => {};
const mapDispatchToProps = dispatch => {
  return {
    getTodos: todos => dispatch(getListOfTodos(todos))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(App);

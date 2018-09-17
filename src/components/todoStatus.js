import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getCompletedTodos,
  getAllTodos,
  getIncompleteTodos
} from "../actions/todoActions";

class todoStatus extends Component {
  constructor(props) {
    super(props);
    this.getCompletedTodoList = this.getCompletedTodoList.bind(this);
    this.getAllTodos = this.getAllTodos.bind(this);
    this.getIncompleteTodos = this.getIncompleteTodos.bind(this);
  }
  getCompletedTodoList() {
    //alert("here...");
    this.props.getCompletedList();
  }

  getAllTodos() {
    this.props.getAllListOfTodos();
  }

  getIncompleteTodos() {
    this.props.getAllIncompleteTodos();
  }
  render() {
    return (
      <div className="todoStatus">
        <button
          className="btn"
          onClick={() => {
            this.getAllTodos();
          }}
        >
          ALL
        </button>
        <button
          className="btn"
          onClick={() => {
            this.getCompletedTodoList();
          }}
        >
          COMPLETE
        </button>
        <button
          className="btn"
          onClick={() => {
            this.getIncompleteTodos();
          }}
        >
          INCOMPLETE
        </button>
      </div>
    );
  }
}
const MapDispatchToProps = dispatch => {
  return {
    getCompletedList: () => dispatch(getCompletedTodos()),
    getAllListOfTodos: () => dispatch(getAllTodos()),
    getAllIncompleteTodos: () => dispatch(getIncompleteTodos())
  };
};
export default connect(
  null,
  MapDispatchToProps
)(todoStatus);

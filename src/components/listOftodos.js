import React, { Component } from "react";
import { DELETE_TODO, UPDATE_TODO } from "../actions/actionTypes";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faTrashAlt,
  faCheck
} from "@fortawesome/free-solid-svg-icons";
import { deleteTodo, updateTodoStatus } from "../actions/todoActions";

class listOftodos extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  removeTodo(key) {
    console.log("keyyyyyyyyyyyyy: ", key);
    if (window.confirm("Are you sure you want to delete this todo ?")) {
      this.props.deleteTodos(key);
    }
    //console.log(this.props.todos);
  }
  updateStatus(id, status) {
    this.props.updateTodoStat(id, status);
  }

  todoList() {
    const todos = this.props.todos.map(todo => (
      <li className="todo-list__item complete">
        <button
          className="todo-list__item-content"
          onClick={() => {
            this.updateStatus(todo._id, 1);
          }}
        >
          {todo.todoName}
        </button>
        <div>
          {todo.todoStatus == "1" ? (
            <button
              className="btn todo-list__item-remove"
              onClick={() => {
                this.removeTodo(todo._id);
              }}
            >
              <FontAwesomeIcon icon={faCheck} />
            </button>
          ) : (
            ""
          )}
          <button
            className="btn todo-list__item-remove"
            onClick={() => {
              this.removeTodo(todo._id);
            }}
          >
            <FontAwesomeIcon icon={faTrashAlt} />
          </button>
        </div>
      </li>
    ));
    return todos;
  }

  render() {
    return <ol className="todo-list">{this.todoList()}</ol>;
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todoReducer.listOfTodos
  };
};
const mapDispatchToProps = dispatch => {
  return {
    deleteTodos: key => dispatch(deleteTodo(key)),
    updateTodoStat: (key, status) => dispatch(updateTodoStatus(key, status))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(listOftodos);

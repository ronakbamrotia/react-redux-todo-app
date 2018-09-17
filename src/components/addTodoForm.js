import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions/todoActions";

class addTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoName: "",
      key: 0
    };
    this.todoChangeHandler = this.todoChangeHandler.bind(this);
    this.addTodoHandler = this.addTodoHandler.bind(this);
  }

  todoChangeHandler(event) {
    this.setState({
      todoName: event.target.value
    });
    console.log("todoName : " + this.state.todoName);
  }

  addTodoHandler() {
    if (this.state.todoName !== "") {
      this.props.addTodo(this.state.todoName);
    }
    this.setState({
      todoName: ""
    });
    this.nameInput.focus();
  }

  render() {
    return (
      <div className="todoForm">
        <input
          className="form__input"
          type="text"
          onChange={this.todoChangeHandler}
          value={this.state.todoName}
          placeholder="Enter todo to get started"
          ref={input => {
            this.nameInput = input;
          }}
        />
        <button className="btn" onClick={this.addTodoHandler}>
          ADD TODO
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("state in addTodoForm: ", state);
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    addTodo: todoName => dispatch(addTodo(todoName))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(addTodoForm);

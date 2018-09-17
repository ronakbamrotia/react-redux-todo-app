import {
  ADD_TODO,
  DELETE_TODO,
  UPDATE_TODO,
  GET_LIST_OF_TODOS,
  UPDATE_STATUS,
  GET_COMPLETED,
  GET_ALL_TODOS,
  GET_INCOMPLETED_TODOS
} from "./actionTypes";
import axios from "axios";

export const addTodo = todoName => dispatch => {
  const todos = {
    todoName: todoName
  };
  axios.post("/api/todos/addtodo", todos).then(todo => {
    dispatch({
      type: ADD_TODO,
      payload: {
        name: todo.data.todoName,
        key: todo.data._id
      }
    });
  });
};

export const deleteTodo = key => dispatch => {
  const todos = {
    id: key
  };
  axios.post("/api/todos/deletetodo", todos).then(todo => {
    dispatch({
      type: DELETE_TODO,
      payload: {
        key: key
      }
    });
  });
  return {
    type: DELETE_TODO,
    payload: {
      key: key
    }
  };
};

export const updateTodoStatus = (key, status) => dispatch => {
  const todos = {
    id: key,
    todoStatus: status
  };
  axios.patch("/api/todos/updatetodo", todos).then(todo => {
    dispatch({
      type: UPDATE_STATUS,
      payload: {
        todo: todo.data
      }
    });
  });
};

export const getListOfTodos = todos => {
  return {
    type: GET_LIST_OF_TODOS,
    payload: {
      todos: todos
    }
  };
};

export const getCompletedTodos = () => {
  return {
    type: GET_COMPLETED
  };
};

export const getAllTodos = () => {
  return {
    type: GET_ALL_TODOS
  };
};

export const getIncompleteTodos = () => {
  return {
    type: GET_INCOMPLETED_TODOS
  };
};

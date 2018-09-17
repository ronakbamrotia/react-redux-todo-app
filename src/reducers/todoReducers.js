import {
  ADD_TODO,
  DELETE_TODO,
  UPDATE_TODO,
  GET_LIST_OF_TODOS,
  UPDATE_STATUS,
  GET_COMPLETED,
  GET_ALL_TODOS,
  GET_INCOMPLETED_TODOS
} from "../actions/actionTypes";

const initialState = {
  listOfTodos: [],
  allTodos: []
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        allTodos: [
          ...state.allTodos,
          {
            todoName: action.payload.name,
            _id: action.payload.key
          }
        ],
        listOfTodos: [
          ...state.allTodos,
          {
            todoName: action.payload.name,
            _id: action.payload.key
          }
        ]
      };
    case DELETE_TODO:
      return {
        ...state,
        allTodos: state.allTodos.filter(
          todo => todo._id !== action.payload.key
        ),
        listOfTodos: state.allTodos.filter(
          todo => todo._id !== action.payload.key
        )
      };

    case GET_LIST_OF_TODOS:
      return {
        ...state,
        listOfTodos: action.payload.todos,
        allTodos: action.payload.todos
      };

    case UPDATE_STATUS:
      return {
        ...state,
        allTodos: state.allTodos.map(todo => {
          if (todo._id === action.payload.todo._id) {
            console.log(action.payload.todo._id);
            return { ...todo, ...action.payload.todo };
          }
          return todo;
        }),
        listOfTodos: state.allTodos.map(todo => {
          if (todo._id === action.payload.todo._id) {
            console.log(action.payload.todo._id);
            return { ...todo, ...action.payload.todo };
          }
          return todo;
        })
      };

    case GET_COMPLETED:
      return {
        ...state,
        listOfTodos: state.allTodos.filter(todo => {
          return todo.todoStatus === "1";
        })
      };

    case GET_INCOMPLETED_TODOS:
      return {
        ...state,
        listOfTodos: state.allTodos.filter(todo => {
          return todo.todoStatus === "0";
        })
      };

    case GET_ALL_TODOS:
      return {
        ...state,
        listOfTodos: state.allTodos
      };
    default:
      return state;
  }
};

export default todoReducer;

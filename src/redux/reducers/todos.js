import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  COMPLETE_TODO,
  ALL_COMPLETE,
  DELETE_COMPLETED
} from '../action/actionTypes';

const initialState = []

const todos = (state = initialState, { text, id, completed, type }) => {
  switch (type) {
    case ADD_TODO:
      return [
        {
          text,
          id,
          completed
        },
        ...state
      ];
    case DELETE_TODO:
      return [...state].filter(todo => todo.id !== id);
    case COMPLETE_TODO:
      return [...state].map(todo => {
        if(todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
    case EDIT_TODO:
      return [...state].map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            text
          };
        }
        return todo;
      });
    case ALL_COMPLETE:
      return [...state].map(todo => {
        todo.completed = completed;
        return {
          ...todo,
        }
      });
    case DELETE_COMPLETED:
      return [...state].filter(todo => todo.completed !== completed);
    default:
      return state;
  }
}

export default todos;
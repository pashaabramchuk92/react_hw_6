import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  COMPLETE_TODO,
  ALL_COMPLETE,
  DELETE_COMPLETED
} from '../action/actionTypes';

const todos = (state = [], { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return [
        {
          text: payload,
          id: Date.now(),
          completed: false
        },
        ...state
      ];

    case DELETE_TODO:
      return state.filter(todo => todo.id !== payload);

    case COMPLETE_TODO:
      return state.map(todo => todo.id === payload
        ? {...todo, completed: !todo.completed}
        : todo);

    case EDIT_TODO:
      return state.map(todo => todo.id === payload.id
        ? {...todo, text: payload.text}
        : todo);

    case ALL_COMPLETE:
      return state.map(todo => ({...todo, completed: !todo.completed}));

    case DELETE_COMPLETED:
      return state.filter(todo => !todo.completed);

    default:
      return state;
  }
}

export default todos;
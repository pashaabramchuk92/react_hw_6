import { ADD_TODO, DELETE_TODO, EDIT_TODO, COMPLETE_TODO } from '../action/actionTypes';

const initialState = [{text: 'for test', id: 1, completed: false}]

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
      })
    default:
      return state;
  }
}

export default todos;
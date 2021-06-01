import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  COMPLETE_TODO,
  FILTER_TODOS
} from "./actionTypes";

export const addTodo = (text, id = Date.now(), completed = false) => ({
  type: ADD_TODO,
  text,
  id,
  completed
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  id
});

export const editTodo = (id, text) => ({
  type: EDIT_TODO,
  id,
  text
});

export const completeTodo = (id) => ({
  type: COMPLETE_TODO,
  id
});

export const filterTodos = (activeFilter) => ({
  type: FILTER_TODOS,
  activeFilter
});
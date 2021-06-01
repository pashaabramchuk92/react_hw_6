import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  COMPLETE_TODO,
  CHANGE_FILTER,
  ALL_COMPLETE,
  DELETE_COMPLETED
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

export const changeFilter = (activeFilter) => ({
  type: CHANGE_FILTER,
  activeFilter
});

export const setAllComplete = (completed) => ({
  type: ALL_COMPLETE,
  completed
});

export const deleteAllCompleted = (completed) => ({
  type: DELETE_COMPLETED,
  completed
});
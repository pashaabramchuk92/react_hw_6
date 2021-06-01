import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  COMPLETE_TODO,
  CHANGE_FILTER,
  ALL_COMPLETE,
  DELETE_COMPLETED
} from "./actionTypes";

export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: text
});


export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: id
});

export const editTodo = (id, text) => ({
  type: EDIT_TODO,
  payload: {
    id,
    text
  }
});

export const completeTodo = (id) => ({
  type: COMPLETE_TODO,
  payload: id
});

export const changeFilter = (activeFilter) => ({
  type: CHANGE_FILTER,
  activeFilter
});

export const setAllComplete = (completed) => ({
  type: ALL_COMPLETE,
  payload: completed
});

export const deleteAllCompleted = (completed) => ({
  type: DELETE_COMPLETED,
  payload: completed
});
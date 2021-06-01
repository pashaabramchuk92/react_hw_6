import "./styles.css";
import { useState } from "react";
import { connect } from 'react-redux';

import Footer from "./components/footer/Footer";
import AddTodo from "./components/AddTodo"
import ToggleTodos from "./components/ToggleTodos";
import ListTodo from "./components/ListTodo";
import {
  addTodo,
  deleteTodo,
  completeTodo,
  editTodo,
  filterTodos
} from "./redux/action";

const App = (props) => {
  const {
    todos,
    addTodo,
    deleteTodo,
    completeTodo,
    editTodo,
    filter,
    filterTodos
  } = props;

  const [todoText, setTodoText] = useState('');

  const handleInputChange = (e) => setTodoText(e.target.value);

  const handleCreateTodo = (e) => {
    if(e.key === 'Enter') {
      if(e.target.value.trim()) {
        addTodo(todoText);
      }
      setTodoText('');
    }
  }

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <AddTodo
          todoText={todoText}
          handleInputChange={handleInputChange}
          handleCreateTodo={handleCreateTodo}
        />
      </header>
      <section className="main">
        <ToggleTodos />
        <ListTodo
          todos={todos}
          deleteTodo={deleteTodo}
          completeTodo={completeTodo}
          editTodo={editTodo}
        />
      </section>
      <Footer
        filter={filter}
        filterTodos={filterTodos}
      />
    </section>
  );
}

export default connect(({ todos, filter }) => ({
  todos,
  filter
}), { addTodo, deleteTodo, completeTodo, editTodo, filterTodos })(App);

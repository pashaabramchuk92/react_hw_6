import PropTypes from 'prop-types';
import "./styles.css";
import { connect } from 'react-redux';

import Footer from "./components/footer/Footer";
import AddTodo from "./components/AddTodo"
import ToggleTodos from "./components/ToggleTodos";
import ListTodo from "./components/ListTodo";

const App = ({ todos }) => {
  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <AddTodo />
      </header>
      <section className="main">
        <ToggleTodos />
        <ListTodo />
      </section>
      {todos.length > 0 && <Footer />}
    </section>
  );
}

App.propTypes = {
  todos: PropTypes.array
}

const mapStateToProps = ({ todos }) => ({ todos });

export default connect(mapStateToProps)(App);
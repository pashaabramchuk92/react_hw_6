import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeFilter } from '../redux/action';
import { FilterStatus } from "../utils/enums";

import ListTodoItem from "./ListTodoItem"

const ListTodo = ({ todos, filters }) => {

  const filterTodos = (todos, activeFilter) => {
    switch (activeFilter) {
      case FilterStatus.COMPLETED:
        return todos.filter(todo => todo.completed);
      case FilterStatus.ACTIVE:
        return todos.filter(todo => !todo.completed);
      default:
        return todos;
    }
  };

  const filteredTodos = filterTodos(todos, filters);

  return (
    <ul className="todo-list">
        {filteredTodos.map(todo => (
          <ListTodoItem key={todo.id} {...todo} />
        ))}
    </ul>
  )
}

ListTodo.propTypes = {
  todos: PropTypes.array,
  filters: PropTypes.string,
}

const mapStateToProps = ({ todos, filters }) => ({ todos, filters });

export default connect(mapStateToProps, { changeFilter })(ListTodo);

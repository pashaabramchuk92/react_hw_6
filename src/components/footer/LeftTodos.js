import PropTypes from 'prop-types';

const LeftTodos = ({ counter }) => {
  return (
    <span className="todo-count">
      <strong>{counter} </strong>
      items left
    </span>
  );
}

LeftTodos.propTypes = {
  counter: PropTypes.number
}

export default LeftTodos;
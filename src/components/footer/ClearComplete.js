import PropTypes from 'prop-types';
import React from 'react';

const ClearComplete = ({ completedTodos, deleteAllCompleted }) => {

  const handleClick = () => completedTodos.map(todo => deleteAllCompleted(todo.completed));

  return (
    <button
      className="clear-completed"
      onClick={() => handleClick()}
    >Clear completed</button>
  );
}

ClearComplete.propTypes = {
  completedTodos: PropTypes.array,
  deleteAllCompleted: PropTypes.func,
}

export default React.memo(ClearComplete);
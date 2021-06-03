import PropTypes from 'prop-types';
import React from 'react';

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

export default React.memo(LeftTodos);
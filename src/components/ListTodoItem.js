import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from "react";
import { connect } from 'react-redux';
import { deleteTodo, completeTodo, editTodo } from "../redux/action";

const ListTodoItem = ({ deleteTodo, completeTodo, editTodo, text, id, completed }) => {
  
  const editRef = useRef();

  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState(text);

  useEffect(() => {
    editRef.current.focus();
  }, [editing]);

  const completeClassName = completed ? 'completed' : '';
  const editingClassName = editing ? 'editing' : '';

  const handleUpdateTodo = () => {
    setEditing(false);
    editTodo(id, value);
  }

  return (
    <li className={`${completeClassName} ${editingClassName}`}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={completed}
          onChange={() => completeTodo(id)}
        />
        <label
          onDoubleClick={() => completed ? null : setEditing(true)}
        >{text}</label>
        <button
          className="destroy"
          onClick={() => deleteTodo(id)}
        ></button>
      </div>
      <input
        ref={editRef}
        type="text"
        className="edit"
        value={value}
        onBlur={() => handleUpdateTodo()}
        onKeyDown={(e) => e.key === 'Enter' ? handleUpdateTodo() : null}
        onChange={(e) => setValue(e.target.value)}
      />
    </li>
  )
}

ListTodoItem.propTypes = {
  deleteTodo: PropTypes.func,
  completeTodo: PropTypes.func,
  editTodo: PropTypes.func,
  text: PropTypes.string,
  id: PropTypes.number,
  completed: PropTypes.bool
}

export default connect(
  null,
  { deleteTodo, completeTodo, editTodo }
  )(ListTodoItem);

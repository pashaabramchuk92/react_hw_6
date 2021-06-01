import { useEffect, useRef, useState } from "react";

const ListTodoItem = ({
  text,
  id,
  completed,
  deleteTodo,
  completeTodo,
  editTodo
}) => {
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
          onDoubleClick={() => completed ? false : setEditing(true)}
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
        onKeyDown={(e) => e.key === 'Enter' ? handleUpdateTodo() : false}
        onChange={(e) => setValue(e.target.value)}
      />
    </li>
  )
}

export default ListTodoItem;
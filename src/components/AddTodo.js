import PropTypes from 'prop-types';
import { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from "../redux/action";

const AddTodo = ({ addTodo }) => {

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
    <div>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        value={todoText}
        onInput={(e) => handleInputChange(e)}
        onKeyDown={(e) => handleCreateTodo(e)}
      />
    </div>
  )
}

AddTodo.propTypes = {
  addTodo: PropTypes.func
}

const mapStateToProps = ({ todos }) => ({ todos });

export default connect(mapStateToProps, { addTodo })(AddTodo);
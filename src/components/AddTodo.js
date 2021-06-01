const AddTodo = ({ todoText, handleInputChange, handleCreateTodo }) => {
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

export default AddTodo;
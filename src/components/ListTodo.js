import ListTodoItem from "./ListTodoItem"

const ListTodo = ({
  todos,
  deleteTodo,
  completeTodo,
  editTodo,
}) => {

  return (
    <ul className="todo-list">
        {todos.map(todo => (
          <ListTodoItem
            key={todo.id}
            {...todo}
            deleteTodo={deleteTodo}
            completeTodo={completeTodo}
            editTodo={editTodo}
          />
        ))}
    </ul>
  )
}

export default ListTodo;
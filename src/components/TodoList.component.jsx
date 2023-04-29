import TodoListItem from "./TodoListItem.component";

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <ul className="list">
      {todos.length === 0 && "No Todos"}
      {todos.map((todo) => {
        return (
          <TodoListItem
            {...todo}
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </ul>
  );
};

export default TodoList;

// The TodoList holds a todos a toggleTodo and a deleteTodo
// We use a ul list that has a className for styling
// we use {todo.length === 0 && 'No Todos} if the lenfth equals 0 then we write a string saying No Todos

// we return a TodoListItem that {..todos} props aswell as a key={todo.id} toggleTodo={toggleTodo} to allow the toggleTodo and a deleteTodo={deleteTodo} these props can be sent dowen into the TodoListItem

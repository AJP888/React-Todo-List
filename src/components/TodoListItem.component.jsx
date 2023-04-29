import React from "react";

const TodoListItem = ({ completed, id, title, toggleTodo, deleteTodo }) => {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        {title}
      </label>
      <button onClick={() => deleteTodo(id)} className="btn btn-danger">
        Delete
      </button>
    </li>
  );
};

export default TodoListItem;

// The TodoListItem holds the completed, id, title, toggleTodo, deleteTodo  props
// we then have a li for each ojbect added

// we then have a type='checkbox' that allows us to create a tick box
// checked={complete} this completed everytime it is finsihed
// onChanged(e) => toggleTodo(id, e.target.checked) // everytime we tickl the checked box // the styling changes the color
// {title} allows the title to be changed trough titel prop
// <button> alllows to delete each object // we use onClick{() => deleteTodo(id)} this allows us to delete object because of a id

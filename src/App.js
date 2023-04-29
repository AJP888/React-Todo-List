import React, { useState, useEffect } from "react";
import NewTodoForm from "./components/NewTodoForm.component";
import TodoList from "./components/TodoList.component";
import "./App.css";

function App(props) {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) return [];

    return JSON.parse(localValue);
  });

  // UseEffect for store Data
  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos]);

  function addTodo(title) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
  }

  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }

        return todo;
      });
    });
  }

  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  return (
    <>
      <NewTodoForm onSubmit={addTodo} />
      <h1 className="header">Todo List</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  );
}

export default App;

// App Return ()
// We Have Both NewTodoForm and TodoList imported and added into the return
// we use props in both of the  onSubmit={addTodo} /  todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}

// We import useState / todos and setTodos = inside setTodos const value that gets data from localStorage which USES .GETiTEM('iTEM) / IF There is no local value return an Array []

// we use a useEffect which holds  localStorage.setItem("ITEMS", JSON.stringify(todos)); and only renders when [todos] is maniuplated.

//  We have three functions : addTodo / toggleTodo / deleteTodo  We then send the props down into todoList

// We send addTodo down into NewTodoForm

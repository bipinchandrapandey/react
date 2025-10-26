import React from "react";
import "./TodoList.css";
const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo._id} className={todo.completed ? "completed" : ""}>
          <span onClick={() => toggleTodo(todo._id)}>{todo.text}</span>
          <button onClick={() => deleteTodo(todo._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;

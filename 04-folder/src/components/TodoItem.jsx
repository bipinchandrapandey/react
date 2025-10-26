import React from "react";
import "./TodoItem.css";
const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <li className="todo-item">
      <span
        onClick={() => toggleTodo(todo.id)}
        className={todo.completed ? "completed" : ""}
      >
        {todo.text}
      </span>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </li>
  );
};

export default TodoItem;






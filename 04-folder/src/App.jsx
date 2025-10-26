import React, { useState, useEffect } from "react";
import axios from "axios";
import TodoInput from "./components/TodoInput.jsx";
import TodoList from "./components/TodoList.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([]);

  // Fetch todos from backend
  const fetchTodos = async () => {
    try {
      const response = await axios.get("http://localhost:5000/todos");
      setTodos(response.data);
    } catch (err) {
      console.error("Error fetching todos:", err);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  // Add new todo
  const addTodo = async (text) => {
    try {
      const response = await axios.post("http://localhost:5000/todos", { text });
      setTodos([response.data, ...todos]);
    } catch (err) {
      console.error("Error adding todo:", err);
    }
  };

  // Toggle completed
  const toggleTodo = async (_id) => {
    try {
      const response = await axios.put(`http://localhost:5000/todos/${_id}`);
      setTodos(todos.map((t) => (t._id === _id ? response.data : t)));
    } catch (err) {
      console.error("Error toggling todo:", err);
    }
  };

  // Delete todo
  const deleteTodo = async (_id) => {
    try {
      await axios.delete(`http://localhost:5000/todos/${_id}`);
      setTodos(todos.filter((t) => t._id !== _id));
    } catch (err) {
      console.error("Error deleting todo:", err);
    }
  };

  return (
    <div className="app">
      <h1>To-Do List</h1>
      <TodoInput addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      <Footer todos={todos} />
    </div>
  );
};

export default App;

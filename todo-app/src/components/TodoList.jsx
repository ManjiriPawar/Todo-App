import React, { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  const addTodo = () => {
    if (!input.trim()) return;
    if (isEditing) {
      setTodos(
        todos.map((todo) =>
          todo.id === editId ? { ...todo, text: input } : todo
        )
      );
      setIsEditing(false);
      setEditId(null);
    } else {
      setTodos([...todos, { id: Date.now(), text: input }]);
    }
    setInput("");
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id) => {
    const todoToEdit = todos.find((todo) => todo.id === id);
    setInput(todoToEdit.text);
    setIsEditing(true);
    setEditId(id);
  };

  return (
    <div className="todo-container">
      <h1 className="title">Todo List</h1>
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a todo"
        />
        <button onClick={addTodo}>{isEditing ? "Update" : "Add"}</button>
      </div>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            <span>{todo.text}</span>
            <div>
              <button onClick={() => editTodo(todo.id)} className="edit-btn">
                Edit
              </button>
              <button
                onClick={() => deleteTodo(todo.id)}
                className="delete-btn"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

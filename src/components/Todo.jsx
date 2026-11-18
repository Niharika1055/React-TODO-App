
import React, { useState } from "react";
import "./Todo.css";

function Todo() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim() === "") return;

    setTasks([
      ...tasks,
      { id: Date.now(), text: input, completed: false }
    ]);

    setInput("");
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id
        ? { ...task, completed: !task.completed }
        : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="todo-container">
      <h1>My TODO List</h1>

      <input
        className="todo-input"
        type="text"
        placeholder="Enter a new task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button className="add-btn" onClick={addTask}>
        Add Task
      </button>

      {tasks.map(task => (
        <div className="task-item" key={task.id}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTask(task.id)}
          />

          <span
            className="task-text"
            style={{
              textDecoration: task.completed ? "line-through" : "none"
            }}
          >
            {task.text}
          </span>

          <button
            className="delete-btn"
            onClick={() => deleteTask(task.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Todo;

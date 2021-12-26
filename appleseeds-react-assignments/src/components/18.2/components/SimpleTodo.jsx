import React, { useState } from "react";
import "./SimpleTodo.css";

function SimpleTodo(props) {
  const [tasks, setTasks] = useState([
    { name: "CSS", completed: true },
    { name: "JavaScript", completed: true },
    { name: "Learn React", completed: false },
    { name: "Learn mongoDB", completed: false },
    { name: "Learn Node JS", completed: false },
  ]);

  const handleCheck = (name) => {
    const updateTasks = [...tasks];
    const task = updateTasks.find((task) => task.name === name);
    task.completed = !task.completed;
    setTasks(updateTasks);
  };

  const isCompleted = (completed) =>
    completed ? <i class="fas fa-check"></i> : <i class="fas fa-times"></i>;

  return (
    <div className="simple-todo">
      {tasks.map((task) => (
        <div onClick={() => handleCheck(task.name)}>
          <span className={task.completed ? "completed" : ""}>{task.name}</span>
          {isCompleted(task.completed)}
        </div>
      ))}
    </div>
  );
}

export default SimpleTodo;

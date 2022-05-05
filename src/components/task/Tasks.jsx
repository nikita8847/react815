import React, { useState, useEffect } from "react";
import Task from "./Task";

function Tasks() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Login Feature", isComplete: false },
    { id: 2, title: "Signup Feature", isComplete: true },
    { id: 3, title: "Transaction Feature", isComplete: false },
    { id: 4, title: "Orders Feature", isComplete: true },
    { id: 5, title: "Payments Feature", isComplete: false },
    { id: 6, title: "Deploy to productions", isComplete: false },
  ]);

  useEffect(() => {
    console.log("COmponent initialized");
  }, []);

  useEffect(() => {
    console.log("Component updated");
  });

  const updateTask = (id, status) => {
    let index = tasks.findIndex(t => t.id == id);

    let copy = [...tasks];
    copy[index]["isComplete"] = status;
    setTasks(copy);
  };

  const deleteTask = id => {
    let result = tasks.filter(t => t.id !== id);
    setTasks(result);
  };
  return (
    <div>
      Tasks
      {tasks.map(task => (
        <Task
          key={task.id}
          id={task.id}
          title={task.title}
          isComplete={task.isComplete}
          deleteTask={deleteTask}
          updateTask={updateTask}
        />
      ))}
    </div>
  );
}

export default Tasks;

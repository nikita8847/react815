import React, { useEffect } from "react";
import "./task.css";
import { FaCheck, FaUndoAlt, FaTrash } from "react-icons/fa";

function Task({ id, title, isComplete, deleteTask, updateTask }) {
  useEffect(() => {
    console.log("Component ", id, "Rendered");

    return () => {
      console.log("Component", id, "Unmounted");
    };
  }, []);

  return (
    <div className={`m-task-wrapper ${isComplete ? "active" : ""}`}>
      <h5>{title}</h5>{" "}
      <div className="controls">
        <FaCheck onClick={() => updateTask(id, true)} />

        <FaUndoAlt onClick={() => updateTask(id, false)} />

        <FaTrash onClick={() => deleteTask(id)} />
      </div>
    </div>
  );
}

export default Task;

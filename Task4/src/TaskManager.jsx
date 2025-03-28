
import React, { useState } from "react";

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [editId, setEditId] = useState(null);
  const [filter, setFilter] = useState("all"); 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editId) {
      setTasks(tasks.map(task => 
        task.id === editId ? { ...task, title, description, dueDate } : task
      ));
      setEditId(null);
    } else {
      setTasks([...tasks, { id: Date.now(), title, description, dueDate, completed: false }]);
    }
    setTitle("");
    setDescription("");
    setDueDate("");
  };

  const toggleCompletion = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const handleEdit = (task) => {
    setTitle(task.title);
    setDescription(task.description);
    setDueDate(task.dueDate);
    setEditId(task.id);
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true;
  });

  return (
    <div style={{ maxWidth: "800px", margin: "auto", padding: "40px", background: "#f4f4f4", borderRadius: "10px", boxShadow: "0 0 10px rgba(0,0,0,0.1)" }}>
      <h2 style={{ textAlign: "center" }}>📌 Task Manager</h2>
      
      {/* Task Form */}
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <input 
          type="text" placeholder="Title" value={title} 
          onChange={(e) => setTitle(e.target.value)} required 
          style={{ padding: "10px", fontSize: "16px" }}
        />
        <textarea 
          placeholder="Description" value={description} 
          onChange={(e) => setDescription(e.target.value)} required 
          style={{ padding: "10px", fontSize: "16px", minHeight: "80px" }}
        ></textarea>
        <input 
          type="date" value={dueDate} 
          onChange={(e) => setDueDate(e.target.value)} required 
          style={{ padding: "10px", fontSize: "16px" }}
        />
        <button type="submit" style={{ padding: "10px", fontSize: "16px", background: "#28a745", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>
          {editId ? "Update" : "Add"} Task
        </button>
      </form>

      {/* Filter Tasks */}
      <div style={{ marginTop: "20px", textAlign: "center" }}>
        <button onClick={() => setFilter("all")} style={{ margin: "5px", padding: "10px" }}>All</button>
        <button onClick={() => setFilter("completed")} style={{ margin: "5px", padding: "10px" }}>Completed</button>
        <button onClick={() => setFilter("pending")} style={{ margin: "5px", padding: "10px" }}>Pending</button>
      </div>

      {/* Task List */}
      <div style={{ marginTop: "20px" }}>
        {filteredTasks.map(task => (
          <div key={task.id} style={{ border: "1px solid black", margin: "10px 0", padding: "15px", borderRadius: "5px", background: "white" }}>
            <h3>{task.title} {task.completed ? "✅" : "⏳"}</h3>
            <p>{task.description}</p>
            <p><strong>Due:</strong> {task.dueDate}</p>
            <button onClick={() => toggleCompletion(task.id)} style={{ margin: "5px", padding: "10px" }}>
              {task.completed ? "Undo" : "Complete"}
            </button>
            <button onClick={() => handleEdit(task)} style={{ margin: "5px", padding: "10px" }}>Edit</button>
            <button onClick={() => handleDelete(task.id)} style={{ margin: "5px", padding: "10px", background: "red", color: "white" }}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskManager;

import React, { useState } from 'react';

const TaskManager = () => {
  const [tasks, setTasks] = useState([
    { name: "Meeting with Client A", dueDate: "2023-05-15", priority: "High" },
    { name: "Prepare report", dueDate: "2023-05-20", priority: "Medium" },
  ]);

  const [newTask, setNewTask] = useState({ name: '', dueDate: '', priority: 'Low' });

  const handleInputChange = (e) => {
    setNewTask({ ...newTask, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks([...tasks, newTask]);
    setNewTask({ name: '', dueDate: '', priority: 'Low' });
  };

  return (
    <div className="page-container">
      <h1>Task Manager</h1>
      <form onSubmit={handleSubmit} className="form-container">
        <div className="form-group">
          <label htmlFor="name">Task Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={newTask.name}
            onChange={handleInputChange}
            required
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label htmlFor="dueDate">Due Date</label>
          <input
            type="date"
            id="dueDate"
            name="dueDate"
            value={newTask.dueDate}
            onChange={handleInputChange}
            required
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label htmlFor="priority">Priority</label>
          <select
            id="priority"
            name="priority"
            value={newTask.priority}
            onChange={handleInputChange}
            className="input-field"
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>
        <button type="submit" className="btn">Add Task</button>
      </form>
      <h2>Tasks</h2>
      <div className="grid">
        {tasks.map((task, index) => (
          <div key={index} className="card task-item">
            <h3>{task.name}</h3>
            <p>Due Date: {task.dueDate}</p>
            <p>Priority: {task.priority}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskManager;

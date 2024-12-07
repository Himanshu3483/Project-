import React, { useState } from 'react';

const Reminders = () => {
  const [reminders, setReminders] = useState([
    { title: "Doctor Appointment", dateTime: "2023-05-15T09:00" },
    { title: "Take Medication", dateTime: "2023-05-15T20:00" },
  ]);

  const [newReminder, setNewReminder] = useState({ title: '', dateTime: '' });

  const handleInputChange = (e) => {
    setNewReminder({ ...newReminder, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setReminders([...reminders, newReminder]);
    setNewReminder({ title: '', dateTime: '' });
  };

  return (
    <div className="page-container">
      <h1>Reminders</h1>
      <form onSubmit={handleSubmit} className="form-container">
        <div className="form-group">
          <label htmlFor="title">Reminder Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={newReminder.title}
            onChange={handleInputChange}
            placeholder="e.g., Doctor Appointment"
            required
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label htmlFor="dateTime">Date and Time</label>
          <input
            type="datetime-local"
            id="dateTime"
            name="dateTime"
            value={newReminder.dateTime}
            onChange={handleInputChange}
            required
            className="input-field"
          />
        </div>
        <button type="submit" className="btn">Add Reminder</button>
      </form>
      <div className="reminder-list">
        <h2>Your Reminders</h2>
        {reminders.map((reminder, index) => (
          <div key={index} className="card reminder-item">
            <h3>{reminder.title}</h3>
            <p>Date and Time: {new Date(reminder.dateTime).toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reminders;

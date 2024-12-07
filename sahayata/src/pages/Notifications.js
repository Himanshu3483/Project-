import React, { useState } from "react";

const Notifications = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "reminder",
      message: "Doctor appointment tomorrow at 10 AM",
      date: "2023-05-14T10:00:00",
    },
    {
      id: 2,
      type: "task",
      message: "Project deadline approaching",
      date: "2023-05-13T09:00:00",
    },
    {
      id: 3,
      type: "support",
      message: "New message in Anxiety Support group",
      date: "2023-05-12T14:30:00",
    },
    {
      id: 4,
      type: "health",
      message: "Remember to log your health data today",
      date: "2023-05-11T20:00:00",
    },
  ]);

  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const handleDismiss = (id) => {
    setNotifications(
      notifications.filter((notification) => notification.id !== id)
    );
  };

  return (
    <div className="page-container">
      <h1>Notifications</h1>
      {notifications.length === 0 ? (
        <p>You have no new notifications.</p>
      ) : (
        <ul className="notification-list">
          {notifications.map((notification) => (
            <li
              key={notification.id}
              className={`notification-item ${notification.type}`}
            >
              <div className="notification-content">
                <p className="notification-message">{notification.message}</p>
                <p className="notification-date">
                  {formatDate(notification.date)}
                </p>
              </div>
              <button
                onClick={() => handleDismiss(notification.id)}
                className="btn btn-dismiss"
              >
                Dismiss
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Notifications;

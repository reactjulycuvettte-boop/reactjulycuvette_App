import { useState } from "react";
import "./NotificationSystem.css";

const NotificationSystem = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      message: "Task Completed Sucessfully",
      type: "success",
      read: false,
    },
    { id: 2, message: "Warning: Low disk Space", type: "warning", read: false },
    { id: 3, message: "Error: Connection failed", type: "error", read: true },
    { id: 4, message: "Information: System update", type: "info", read: false },
  ]);


  function markAsRead(id) {
    setNotifications(notifications.map(notification => notification.id === id ? { ...notification, read: true } : notification))
  }


  function addNotification(type) {
    const messages = {
      success: "This is a dummy success message",
      warning: "This is a dummy warning message",
      error: "This is a dummy error message",
      info: "This is a dummy info message",
    }

    const newNotification = {
      id: notifications.length + 1,
      message: messages[type],
      type: type,
      read: false
    }

    setNotifications([...notifications, newNotification])
  }

  return (
    <>
      <h1>Notification System</h1>

      <div className="notification-system">
        <h2>Dynamic Styles & CSS Classes</h2>

        <div className="notification-controls">
          <button className="btn-success" onClick={() => addNotification("success")}>Add Success</button>
          <button className="btn-warning" onClick={() => addNotification("warning")}>Add Warning</button>
          <button className="btn-error" onClick={() => addNotification("error")}>Add Error</button>
          <button className="btn-info" onClick={() => addNotification("info")}>Add Info</button>
        </div>

        <div className="notifications-list">
          {notifications.map((notification) => (
            <div className={`notification notification-${notification.type} ${notification.read ? "notification-read" : "notification-unread"}`} onClick={() => markAsRead(notification.id)}>
              <div className="notification-content">
                <span className="notification-type">{notification.type}</span>
                <p className="notification-message">{notification.message}</p>
                <span className="notification-status">{notification.read ? "Read" : "Unread"}</span>
              </div>

              <div className="notification-progress" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default NotificationSystem;

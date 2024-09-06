import React from 'react';
import userImage from '../assets/user.avif'
const NotificationsSection = () => {
  return (
    <div className="notications-section">
      <div className="top-not">
        <div className="top-content">
          <i className="bx bxs-bell-ring ring"></i>
          <h1>Notifications</h1>
        </div>
      </div>
      <div className="notification">
        {Array.from({ length: 4 }).map((_, index) => (
          <div className="messages" key={index}>
            <div className="img">
              <img className="user-img img" src={userImage} alt="User" />
            </div>
            <div className="message-sender">
              <h2 className="message-name">Charles sent a message</h2>
              <p className="message-sent">Hey, please come fix the bathroom</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationsSection;

import React from 'react';
import { Link } from 'react-router-dom';
import './StudentPanel.css';

const StudentPanel = () => {
  return (
    <div className="student-panel-container">
      <h1>Student Panel</h1>
      <div className="card-container">
        <div className="card">
          <h2>Issue Books</h2>
          <p>Issue books and set reminders for issued books.</p>
          <Link to="/issue_books">Go to Issue Books</Link>
        </div>
        <div className="card">
          <h2>Check Availability</h2>
          <p>Check the availability of books from the list.</p>
          <Link to="/check_availability">Go to Check Availability</Link>
        </div>
        <div className="card">
          <h2>Notification System</h2>
          <p>Receive notifications about issued books.</p>
          <Link to="/notifications">Go to Notifications</Link>
        </div>
      </div>
    </div>
  );
};

export default StudentPanel;

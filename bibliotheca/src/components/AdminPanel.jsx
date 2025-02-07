import React from 'react';
import { Link } from 'react-router-dom';
import './AdminPanel.css';

const AdminPanel = () => {
  return (
    <div className="admin-panel-container">
      <h1>Admin Panel</h1>
      <div className="card-container">
        <div className="card">
          <h2>Update Book Availability</h2>
          <p>Update the status of availability of books in the library.</p>
          <Link to="/update_books">Go to Update Books</Link>
        </div>
        <div className="card">
          <h2>Issued Books</h2>
          <p>Check who has issued what book.</p>
          <Link to="/issued_books">Go to Issued Books</Link>
        </div>
        <div className="card">
          <h2>Allot Discussion Rooms</h2>
          <p>Allot discussion rooms in the library.</p>
          <Link to="/allot_rooms">Go to Allot Rooms</Link>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;

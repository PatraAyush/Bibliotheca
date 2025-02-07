import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');

  useEffect(() => {
    if (location.state && location.state.name) {
      setUserName(location.state.name);
    }
  }, [location]);

  const handleSignOut = () => {
    setUserName('');
    navigate('/');
  };

  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/AdminPanel">Admin</Link></li>
          <li><Link to="/books">Books</Link></li>
          <li><Link to='/student_panel'>Student</Link></li>
          <div className='Sign'>
            {userName ? (
              <>
                <li>Welcome, {userName}</li>
                <li><button onClick={handleSignOut}>Sign Out</button></li>
              </>
            ) : (
              <>
                <li><Link to="/signup">Signup</Link></li>
                <li><Link to="/signin">Sign In</Link></li>
              </>
            )}
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

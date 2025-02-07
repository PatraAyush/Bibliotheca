import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Welcome = () => {
  const location = useLocation();
  const { name } = location.state;
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 3000); // Redirect after 3 seconds

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div>
      <h1>Welcome, {name}!</h1>
      <p>Redirecting to the home page...</p>
    </div>
  );
};

export default Welcome;

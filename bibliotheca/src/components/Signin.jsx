import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signin.css';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignin = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:3000/users');
    const data = await response.json();
    const user = data.find(user => user.email === email && user.password === password);

    if (user) {
      navigate('/', { state: { name: user.name } });
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="signin-container">
      <h1>Sign In</h1>
      <form onSubmit={handleSignin}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default Signin;

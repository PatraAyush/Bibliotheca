import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import './Home.css';

const Home = () => {
  const location = useLocation();
  const [userName, setUserName] = useState('');

  useEffect(() => {
    if (location.state && location.state.name) {
      setUserName(location.state.name);
    }
  }, [location]);

  return (
    <div className="home-container">
      <Header />
      <main>
        <div className="home-header">
          <h1>Welcome to Bibliotheca</h1>
        </div>
        <section className="home-content">
          <div className='explore'><a href="https://www.goodreads.com/" target='_blank'>explore →</a></div>
        </section>
      </main>
    </div>
  );
};

export default Home;

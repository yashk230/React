// Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const about = () => {
    navigate('/about');
  };
  
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the Home Page!</p>
      <button onClick={about}>Go to About</button>
    </div>
  );
}

export default Home;

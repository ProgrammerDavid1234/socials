import React, { useEffect, useState } from 'react';

const Home = () => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    const storedEmail = localStorage.getItem('email');
    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, []);

  return (
    <div>
      <h1>Hello, {email}</h1>
      <p>Welcome back to your dashboard!</p>
    </div>
  );
};

export default Home;

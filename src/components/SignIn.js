import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from './UserContext';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { user } = useUser();
  const navigate = useNavigate();
  

  const handleSubmit = (event) => {
    event.preventDefault();
    if (user && user.email === email && user.password === password) {
      navigate('/Dashboard');// Redirect to dashboard if sign-in is successful
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </label>
      <button type="submit">Sign In</button>
    </form>
  );
};

export default SignIn;

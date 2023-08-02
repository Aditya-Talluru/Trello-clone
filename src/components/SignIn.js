import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from './UserContext';
import '../styles/Form.css';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { user } = useUser();
  const navigate = useNavigate();
  

  const handleSubmit = (event) => {
    event.preventDefault();
    if (user && user.email === email && user.password === password) {
      navigate('/Dashboard');
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <>
    <h2 > PLease Log in</h2>
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </label>
      <br />
      <button type="submit">Sign In</button>
    </form>
    </>
  );
};

export default SignIn;

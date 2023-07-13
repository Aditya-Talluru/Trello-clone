import React, { useState } from 'react';
import { useUser } from './UserContext';
import { Navigate, useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [firstName, setFirstName] = useState(''); 
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { user,setUser } = useUser();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ email, password });
    console.log(user);
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword(''); 

    navigate('/signin');
  };

  return (
    <form onSubmit={handleSubmit}>
        <label>
        First Name:
        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
      </label>
      <label>
        Email:
        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </label>
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUp;

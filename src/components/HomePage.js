import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/StyleGuide.css';

function HomePage() {

    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/signup')
    }
  return (
    <>
    <h2>Welcome to trello clone</h2>
    <button onClick={handleClick}>Signup</button>
    <br />
    <button onClick={() => navigate('/signin')}>SignIn</button>
    </>

  )
}

export default HomePage
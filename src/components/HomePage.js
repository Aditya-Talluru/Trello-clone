import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function HomePage() {

    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/signup')
    }
  return (
    <>
    <h2>Welcome to trello clone</h2>
    <button onClick={handleClick}>Signup</button>
    <button onClick={() => navigate('/signin')}>SignIn</button>
    </>

  )
}

export default HomePage
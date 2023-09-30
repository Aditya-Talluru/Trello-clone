import React from 'react'
import { Link, useNavigate, Outlet } from 'react-router-dom'
import '../styles/StyleGuide.css';


function HomePage() {

  const headingStyle= {
    fontsize: '2em',
    textalign: 'center'
  }
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/signup')
    }
  return (
    <>
    <h2 style={headingStyle}>Welcome to trello clone</h2>
    <button onClick={handleClick}>Signup</button>
    <br />
    <button onClick={() => <Link to="/signin" />}>SignIn</button>
    <Outlet />
    </>

  )
}

export default HomePage
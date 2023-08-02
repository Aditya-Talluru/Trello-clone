import React from 'react';

import { FaHamburger, FaUser } from "react-icons/fa";
import "../styles/Header.css"

const Header = () => {
  return (
    <header className="header-bar">
      <FaHamburger className="hamburger-icon" />
      <h2 className="header-title">Trello Clone</h2>
      <FaUser className="user-icon" />
    </header>
  )
}

export default Header;
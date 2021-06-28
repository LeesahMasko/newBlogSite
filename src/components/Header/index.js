import React from 'react';
import './styles.css';

/**
* @author
* @function Header
**/

const Header = (props) => {
  return(
    <header className="header">
        <nav className="headerMenu">
            <a href="#">Home</a>
            <a href="#">About Us</a>
            <a href="#">Contact</a>
        </nav>
        <div>
            social media links to come
        </div>
    </header>
   )

 }

export default Header

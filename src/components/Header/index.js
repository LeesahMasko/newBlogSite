import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css';

/**
* @author
* @function Header
**/

const Header = (props) => {
  return(
    <header className="header">
        {/* <nav className="headerMenu"> */}
          {/* <a <NavLink to="/kitchen-posts">Into the Kitchen</NavLink></a>
            <div className="navbar"> */}
            <div className="headerMenu">
          <ul>
            <a><NavLink to="/">Home</NavLink></a>

        </ul>
        </div>
        {/* <div className="headerMenu">
          <ul>
            <li><NavLink to="/kitchen-posts">Home</NavLink></li>
            <li><NavLink to="/">About 3 Paths</NavLink></li>
            <li><NavLink to="/fitness-posts">Contact</NavLink></li>
        </ul>
        </div> */}

        {/* </nav> */}
        <div>
            social media links to come
        </div>
    </header>
   )

 }

export default Header

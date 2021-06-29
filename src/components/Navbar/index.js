import React from 'react';
import './styles.css';

/**
* @author
* @function Navbar
**/

const Navbar = (props) => {
  return(
    <div className="navbar">
        <ul className="navbarMenu">
            <li><a href="#">Into the Kitchen</a></li>
            <li><a href="#">Into the Mind</a></li>
            <li><a href="#">Into the Body</a></li>
        </ul>
        <div className="search">
            <input type="text" placeholder="Search"/>
            <img src={require('../../assets/icons/search1.png')} alt="Search"/>


        </div>
    </div>

   )

 }

export default Navbar

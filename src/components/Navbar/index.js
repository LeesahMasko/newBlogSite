import React from 'react';
import './styles.css';

/**
* @author
* @function Navbar
**/

const Navbar = (props) => {

const submitSearch=(e)=>{
    e.preventDefault();
    alert('Searched');
}

  return(
    <div className="navbar">
        <ul className="navbarMenu">
            <li><a href="#">Into the Kitchen</a></li>
            <li><a href="#">Into the Mind</a></li>
            <li><a href="#">Into the Body</a></li>
        </ul>
        <div className="search">
            <form onSubmit={}>
            <input type="text" placeholder="Search"/>
            <img src='./search1.png' alt="Search"/>
            </form>


        </div>
    </div>

   )

 }

export default Navbar

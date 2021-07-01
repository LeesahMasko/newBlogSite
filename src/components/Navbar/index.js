import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css';

/**
* @author
* @function Navbar
**/

const Navbar = (props) => {

    const[search, setSearch] = useState(false);



const submitSearch=(e)=>{
    e.preventDefault();
    alert('Searched');

}
const openSearch = () => {
    setSearch(true);
}

const searchClass = search ? "searchInput active": "searchInput";

  return(
    <div className="navbar">
        <ul className="navbarMenu">
            <li><NavLink to="/kitchen-posts">Into the Kitchen</NavLink></li>
            <li><NavLink to="/mental-posts">Into the Mind</NavLink></li>
            <li><NavLink to="/fitness-posts">Into the Body</NavLink></li>
        </ul>
        <div className="search">
            <form onSubmit={submitSearch}>
            <input type="text" className={searchClass} placeholder="Search"/>
            <img onClick={openSearch} className="seachIcon" src='./search1.png' alt="Search"/>
            </form>


        </div>
    </div>

   )

 }

export default Navbar



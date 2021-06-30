import React, {useState} from 'react';
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
            <li><a href="#">Into the Kitchen</a></li>
            <li><a href="#">Into the Mind</a></li>
            <li><a href="#">Into the Body</a></li>
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

import React from 'react'
import './styles.css'
import Navbar from '../Navbar'
import SideBar_Fit from '../../data/SideBar_Posts/sideBar_Fit'
import SideBar_Kit from '../../data/SideBar_Posts/sideBar_Kit'
import SideBar_Men from '../../data/SideBar_Posts/sideBar_Men'

/**
* @author
* @function SideBar
**/

const SideBar = (props) => {
    function whichSideBar() {
        if NavLink="/kitchen-posts":
        whichSideBar=SideBar_Kit;

        if NavLink ="/mental-posts":
        whichSideBar=SideBar_Men;

        if NavLink ="/fitness-posts":
        whichSideBar=SideBar_Fit;


    }
  return(

   )

 }

export default SideBar


//check to see which tab is active.  depending on what tab is active, have the associated sidebar display

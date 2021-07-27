import React from 'react'
import './styles.css'

/**
* @author
* @function SideBar
**/

const SideBar = (props) => {
  return(
//    data -> sidebar_Posts
    <div className="sideBars" {...props}>
      {props.children}
    </div>
   )

 }

export default SideBar

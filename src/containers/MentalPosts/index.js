import React from 'react';
import Blog_Post from '../../components/BlogPost';
import SideBar from '../../components/SideBar';
import './styles.css';

/**
* @author
* @function MentalPosts
**/

const MentalPosts = (props) => {
  return(
    <section className="container">
        <Blog_Post />
        <SideBar />

    </section>
   )

 }

export default MentalPosts

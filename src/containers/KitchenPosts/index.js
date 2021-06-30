import React from 'react';
import Blog_Post from '../../components/BlogPost';
import SideBar from '../../components/SideBar';
import Card from '../../components/UI/Card';
import './styles.css';

/**
* @author
* @function KitchenPosts
**/

const KitchenPosts = (props) => {
  return(
    <section className="container">
        <Blog_Post />
        <SideBar />

    </section>
   )

 }

export default KitchenPosts

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
    <div className="container">
    <Card style={{width: "70%"}}>
        <div className="blogHeader">
      <span className="blogCategory">Kitchen blog post</span>
      <h1 className="postTitle">First kitchen blog post</h1>
      <span className="postByandDate"> posted on date</span>
      </div>
      <div className="postImageContainer">
          <img className="kitchenImage" src='../../../BlogPostImages/kitchen.jpg' alt="cooking in the kitchen"/>
      </div>
    </Card>
    <SideBar />
    </div>
   )
}


export default KitchenPosts

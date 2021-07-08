import React from 'react';
import Blog_Post from '../../components/BlogPost';
import SideBar from '../../components/SideBar';
import Card from '../../components/UI/Card';
import './styles.css';

/**
* @author
* @function FitnessPosts
**/

const FitnessPosts = (props) => {
  return(
    <div className="container">
    <Card style={{width: "70%"}}>
        <div className="blogHeaderFit">
      <span className="blogCategory">Fitness blog post</span>
      <h1 className="postTitle">First fitness blog post</h1>
      <span className="postByandDate"> posted on date</span>
      </div>
      <div className="postImageContainer">
          <img className="fitnessImage" src='../../../BlogPostImages/Fitness.jpg' alt="woman jogging"/>
      </div>
      <div className="postContent">
          <h3>Post Title</h3>
          <p>Exercise is not to be skipped :)</p>
      </div>
    </Card>
    <SideBar />
    </div>
   )
}

export default FitnessPosts

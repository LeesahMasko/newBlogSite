import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Blog_Post from '../../components/BlogPost';
import SideBar from '../../components/SideBar';
import Card from '../../components/UI/Card';
import './styles.css';
import SideBar_Men from '../../data/SideBar_Posts/sideBar_Men';

/**
* @author
* @function MentalPosts
**/

const MentalPosts = (props) => {
  return(
    <div className="container">
    <Card style={{width: "70%"}}>
        <div className="blogHeaderMen">
      <span className="blogCategory">Mindfulness blog post</span>
      <h1 className="postTitle">First Mindfulness blog post</h1>
      <span className="postByandDate"> posted on date</span>
      </div>
      <div className="postImageContainer">
          <img className="mindfullnessImage" src='../../../BlogPostImages/mental.jpg' alt="calm waters multi-colored skies"/>
      </div>
    </Card>
    <SideBar>

    <Route path="/sideBar-posts" component={SideBar_Men} />

    </SideBar>
    </div>
   )
}

export default MentalPosts

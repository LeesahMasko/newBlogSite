import React from 'react';
import './kitchenPosts.css';

function KitPost_1() {
  return (
      <div>

 <div className="blogHeaderKit">

      <span className="blogCategory">Kitchen blog post</span>
      <h1 className="postTitle">Learn from my mistakes</h1>
      <span className="postByandDate"> July 15, 2021</span>
      </div>
      <div className="postImageContainer">
          <img className="kitchenImage" src='../../../BlogPostImages/kitchen.jpg' alt="cooking in the kitchen"/>
      </div>
      <div className="postContent">
      <p>I don't think there is any perfect way to eat...</p>
      <p>I wish there was.</p>
      <p>My goal here is to give you the tips, recipes and information that actually helped me.
      </p>

      <h3>A synopsis of my health and fitness path</h3>
      </div>


    </div>
  );
}
      export default KitPost_1;

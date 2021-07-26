import React from 'react'
import Card from '../../components/UI/Card';
import './styles.css'

/**
* @author
* @function SideBar_Fit
**/

const SideBar_Fit = (props) => {
  return(
      <div className="sidebarContainer">
    <Card style={{marginBottom: '20px'}}>
        <div className="sidebarHeader">
            <span>Fitness!</span>

        </div>
        <div className="aboutUsImage">
                <img src='../../../BlogPostImages/aboutUspic.jpg' alt="cats on the counter"/>
            </div>
            <div className="cardBody">
                <h3>Welcome!</h3>
                <p>Our main goal is to help you discover the ultimate way to live your best life!  We believe that food is happiness and comfort, that anxieties and worries can be sucessfully managed, and that movement and exercise is vital and rewarding.</p>
            </div>
    </Card>

    <Card style={{marginBottom: '20px', padding: '20px', boxSizing: 'border-box'}}>
        <div className="sidebarHeader">
            <span>Social Networks</span>

            <div className="cardBody">
            <p>Please follow us on social media</p>
            </div>
        </div>
    </Card>

    <Card style={{marginBottom: '20px', padding: '20px', boxSizing: 'border-box'}}>
        <div className="sidebarHeader">
            <span>Recent Posts</span>
        </div>
        <div className="recentPosts">
            <div className="recentPost">
                <h3>Post Title</h3>
                <span>posted on date</span>
            </div>
            <div className="recentPost">
                <h3>Post Title</h3>
                <span>posted on date</span>
            </div>
            <div className="recentPost">
                <h3>Post Title</h3>
                <span>posted on date</span>
            </div>
        </div>
    </Card>
    </div>
   )

 }

export default SideBar_Fit

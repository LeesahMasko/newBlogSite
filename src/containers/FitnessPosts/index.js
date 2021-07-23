import React from 'react';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Blog_Post from '../../components/BlogPost';
import SideBar from '../../components/SideBar';
import Card from '../../components/UI/Card';
import './styles.css';
import FitPost_1 from '../../data/FitnessPosts/fitPost_1';
import FitPost_2 from '../../data/FitnessPosts/fitPost_2';

/**
* @author
* @function FitnessPosts
**/

const FitnessPosts = (props) => {

return(
    <div className="container">
    <Card style={{width: "70%"}}>

    <Router>
      <Route path="/fitness-posts" component={FitPost_1} />
      <div className="betweenPosts"></div>
      <Route path="/fitness-posts" component={FitPost_2} />
      </Router>
      </Card>





    <SideBar />
    </div>
   )
}
export default FitnessPosts

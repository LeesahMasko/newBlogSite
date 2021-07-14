import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Blog_Post from '../../components/BlogPost';
import SideBar from '../../components/SideBar';
import Card from '../../components/UI/Card';
import './styles.css';
import KitPost_1 from '../../data/KitchenPosts/kitPost_1';
import KitPost_2 from '../../data/KitchenPosts/kitPost_2';


/**
* @author
* @function KitchenPosts
**/


const KitchenPosts = (props) => {
return(
    <div className="container">
    <Card style={{width: "70%"}}>

    <Router>
      <Route path="/kitchen-posts" component={KitPost_1} />
      <div className="betweenPosts"></div>
      <Route path="/kitchen-posts" component={KitPost_2} />
      </Router>
      </Card>





    <SideBar />
    </div>
   )
}


export default KitchenPosts

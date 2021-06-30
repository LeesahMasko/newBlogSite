import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Home from './containers/Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ContactUs from './containers/ContactUs';
import KitchenPosts from './containers/KitchenPosts';
import MentalPosts from './containers/MentalPosts';
import FitnessPosts from './containers/FitnessPosts';

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Hero />

      <Route path="/" exact component={Home}/>
      <Route path="/contact-us" component={ContactUs} />
      <Route path="/kitchen-posts" component={KitchenPosts} />
      <Route path="/mental-posts" component={MentalPosts} />
      <Route path="/fitness-posts" component={FitnessPosts} />


    </div>
    </Router>
  );
}

export default App;

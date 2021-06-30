import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Home from './containers/Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ContactUs from './containers/ContactUs';

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Hero />

      <Route path="/" exact component={Home}/>
      <Route path="/contact-us" component={ContactUs} />


    </div>
    </Router>
  );
}

export default App;

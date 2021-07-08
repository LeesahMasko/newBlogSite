import React from 'react';
import Logo from '../Logo';
import Navbar from '../Navbar';
import Card from '../UI/Card';
import './styles.css';

/**
* @author
* @function Hero
**/

const Hero = (props) => {
  return(
    <div>
        <Card>
            <div style={{padding:'10px 0'}}>
            <Logo />
            </div>
            <Navbar />
        </Card>
    </div>
   )

 }

export default Hero

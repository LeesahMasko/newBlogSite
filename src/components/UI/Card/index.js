import React from 'react';
import './styles.css';

/**
* @author
* @function Card
**/

const Card
 = (props) => {
  return(
    // <div className="card" {...props}> {props.children} </div>
    <div className="card" style={{width: props.width ? props.width: '100%'}} {...props}>
      {props.children}
    </div>
   )

 }

export default Card

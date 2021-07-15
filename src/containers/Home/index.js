import React from 'react';
import './styles.css';


const Home = props=> {
    return(
        <div className="homeContainer">
            <div className="welcomeContent">
                I believe that life is a great balancing act.  We are all striving to find that perfect balance where we find true peace, happiness and confidence in who we are.
                <p>This site isn't going to contain anything ground breaking, it will be a collections of worthwile physical and mental exercise as well as advice and guidance for nutrition.</p>
            </div>
            <div className="tripleBoxes">
                <div className="leftComponent">
                    <p>Food can be magical!</p>
                    <p>It can make us feel euphoric.</p>
                </div>
                <div className="middleComponent">
                    middle
                </div>
                <div className="rightComponent">
                    right
                </div>
            </div>

        </div>

    )
}

export default Home;




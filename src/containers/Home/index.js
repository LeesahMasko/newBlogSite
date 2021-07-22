import React from 'react';
import './styles.css';


const Home = props=> {
    return(
        <div className="homeContainer">
            <div className="welcomeContent">
                Life is a great balancing act.  We are all striving to find that perfect balance where we find true peace, happiness and confidence in who we are.
                <p>This site isn't going to contain anything ground breaking, it will be a collections of worthwile physical and mental exercise as well as advice and guidance for nutrition.</p>
            </div>
            <div className="tripleBoxes">
                <div className="leftComponent">
                    <p>Food can be magical!</p>
                    <p>It can make us feel euphoric. It can also be the avenue that took us somewhere that we no longer want to be. </p>
                </div>
                <div className="middleComponent">
                    Our physcal fitness is something that shouldn't be ignored.  Even thought we often do.  Having a goal to work towards is a good way to start.
                </div>
                <div className="rightComponent">
                    All three of these paths need to be walked.  You can't have a life that is...
                </div>
            </div>

        </div>

    )
}

export default Home;




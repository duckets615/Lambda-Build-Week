import React from 'react';


 import '../../CSS/home.css';
 import '../../LESS/home.less';

 
const Content = () => {
return(
   
 <div className="container">
     <div className="title">
        <h1>The Bountiful Children's Foundation</h1>
    </div>
    <div className="top-content">
        <img className="top-img" src="/img/adventure-alberta-alpine-533658.jpg" alt='' />
        <p>Share your story! Everyone needs some inspiration and your story could be that inspiration!</p>
        <a className="submit" href="submitstory.html">Submit Story</a>
    </div>
    <div className="first-seg desktop">
        <div className="first-card mobile">
            <img src="/img/background-backpack-backpacker-346702.jpg" alt=''/>
            <h3>Story 1</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet ultricies justo, in molestie.</p>
        </div>
        <div className="second-card mobile">
            <img src="img/adventure-blur-cartography-408503.jpg" alt=''/>
            <h3>Story 2</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lorem eros, elementum vitae justo sed.</p>
        </div>
    </div>
    <div className="second-seg desktop">
        <div className="third-card mobile">
            <img src="img/alone-clear-sky-clouds-691919.jpg" alt=''/>
            <h3>Story 3</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lorem eros, elementum vitae justo sed.</p>
        </div>
        <div className="forth-card mobile">
            <img src="img/achievement-agreement-body-language-1179804.jpg" alt=''/>
            <h3>Story 4</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet ultricies justo, in molestie.</p>
        </div>
    </div>
    <div className="about-us mobile">
        <h3>About The Bountiful Children's Foundation</h3>
        <p>The Bountiful Children's Foundation needs a way to collect success stories from 15 different countries.</p>
        <img src="img/blackboard-board-chalk-21696.jpg" alt=''/>
    </div>
    <footer>
        <h4>Copyright 2019</h4>
    </footer>
    </div>
   
 

   
)
   }


export default Content
import React, { useState } from 'react';
import { CardContainer, CardBody, CardItem } from '/Users/tino/GIT/intern-react-challenge/src/components/ui/3d-card.tsx';
import './Businesscard.css';

const Businesscard = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <CardContainer>
      <CardBody>
        <CardItem 
          className={`card-item ${isExpanded ? 'expanded' : ''}`} 
          translateZ={30} 
          onClick={handleClick}
        >
          <div id='content'>
            <img src="pfp.jpg" alt="profile-pic" />
            <h1>Valentino Ivanovski</h1>
            <h2>Computer Science <br></br>Student</h2>
            <p>Phone: (+386) 69 646 407</p>
            <p>GitHub: valentino-ivanovski</p>
            <p>Address: Goriška Ulica 15, Koper, Slovenia</p>
            {isExpanded && (
              <div className="button-container">
                <button>Button 1</button>
                <button>Button 2</button>
                <button>Button 3</button>
              </div>
            )}
          </div>
        </CardItem>
      </CardBody>
    </CardContainer>
  );
};

export default Businesscard;
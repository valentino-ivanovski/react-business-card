import React from 'react';
import { CardContainer, CardBody, CardItem } from '/Users/tino/GIT/intern-react-challenge/src/components/ui/3d-card.tsx'; //I had to use the absolute path here because the relative path was not working for some reason.
import './Businesscard.css';

const Businesscard = () => {
  return (
    <CardContainer>
      <CardBody>
        <CardItem className="card-item" translateZ={30}>
          <div id='content'>
            <img src="pfp.jpg" alt="profile-pic" />
            <h1>Valentino Ivanovski</h1>
            <h2>Computer Science <br></br>Student</h2>
            <p>Phone: (+386) 69 646 407</p>
            <p>GitHub: valentino-ivanovski</p>
            <p>Address: Goriška Ulica 15, Koper, Slovenia</p>
          </div>
        </CardItem>
      </CardBody>
    </CardContainer>
  );
};

export default Businesscard;

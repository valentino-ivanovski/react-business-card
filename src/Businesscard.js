import React, { useState, useEffect } from "react";
import {
    CardContainer,
    CardBody,
    CardItem,
} from "/Users/tino/GIT/intern-react-challenge/src/components/ui/3d-card.tsx";
import "./Businesscard.css";

const Businesscard = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [showWelcome, setShowWelcome] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowWelcome(false);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    const handleClick = () => {
        setIsExpanded(!isExpanded);
    };

    const stopExpand = (e) => {
        e.stopPropagation();
    };

    if (showWelcome) {
        return <h1 className="welcome-text">Welcome!</h1>;
    }

    return (
        <CardContainer>
            <CardBody>
                <CardItem
                    className={`card-item ${isExpanded ? "expanded" : ""}`}
                    onClick={handleClick}
                >
                    <div id="content">
                        <div className="profile">
                            <img src="pfp.jpg" alt="profile-pic" />
                            <h1>Valentino Ivanovski</h1>
                            <p>Computer Science Student</p>
                        </div>
                        <div className="skills">
                            <span>React</span>
                            <span>Java</span>
                            <span>SQL</span>
                            <span>Git</span>
                            <span>Node.js</span>
                            <span>Express.js</span>
                        </div>
                        <div className="contact">
                            <p>Phone: (+386) 69 646 407</p>
                            <p>
                                GitHub:{" "}
                                <a
                                    href="https://www.github.com/valentino-ivanovski"
                                    onClick={stopExpand}
                                >
                                    valentino-ivanovski
                                </a>
                            </p>
                            <p>Address: Goriška Ulica 15, Koper, Slovenia</p>
                        </div>
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

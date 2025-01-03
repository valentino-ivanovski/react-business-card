import React, { useState, useEffect } from "react";
import {
    CardContainer,
    CardBody,
    CardItem,
} from "./components/ui/3d-card.tsx";
import "./Businesscard.css";

const Businesscard = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [showWelcome, setShowWelcome] = useState(() => true); //it wouldnt work without the function when i would start the app

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowWelcome(false);
        }, 4000);
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
                        <img src="pfp.jpg" alt="profile-pic" />
                        <h1 className="name">Valentino Ivanovski</h1>
                        <p className="cs">
                            <em>Computer Science Student</em>
                        </p>
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
                                <a
                                    href="mailto:valentino.ivanovski@icloud.com"
                                    onClick={stopExpand}
                                >
                                    valentino.ivanovski@icloud.com
                                </a>
                            </p>
                            <p>Studying in: Koper, Slovenia</p>
                        </div>
                        {isExpanded && (
                            <div className="button-container">
                                <a
                                    href="https://github.com/valentino-ivanovski"
                                    onClick={stopExpand}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    <button>
                                        <b>GitHub</b>
                                    </button>
                                </a>
                            </div>
                        )}
                    </div>
                </CardItem>
            </CardBody>
        </CardContainer>
    );
};

export default Businesscard;

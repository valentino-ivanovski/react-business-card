import React, { useState, useEffect } from "react";
import {
    CardContainer,
    CardBody,
    CardItem,
} from "./components/ui/3d-card.tsx";
import "./Businesscard.css";

const Businesscard = () => {
    const [showWelcome, setShowWelcome] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowWelcome(false);
        }, 4000);
        return () => clearTimeout(timer);
    }, []);

    if (showWelcome) {
        return <h1 className="welcome-text">Welcome!</h1>;
    }

    return (
        <CardContainer>
            <CardBody>
                <CardItem className="card-item">
                    <div id="content">
                        <img src="pfp.jpg" alt="profile-pic" />
                        <h1 className="name">Valentino Ivanovski</h1>
                        <p className="cs">
                            <em>Computer Science Student</em>
                        </p>
                        <div className="skills">
                            <span>React</span>
                            <span>JavaScript</span>
                            <span>SQL</span>
                            <span>Git</span>
                            <span>Node.js</span>
                            <span>Express.js</span>
                        </div>
                        <div className="contact">
                            <p>
                                <a
                                    href="mailto:valentino.ivanovski@icloud.com"
                                    >
                                    valentino.ivanovski@icloud.com
                                </a>
                            </p>
                            <p>Phone: (+386) 69 646 407</p>
                            <p>Studying in: Koper, Slovenia</p>
                        </div>
                    </div>
                    {/* Always show the GitHub button */}
                    <div className="button-container">
                        <a
                            href="https://github.com/valentino-ivanovski"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            <button>
                                <b>GitHub</b>
                            </button>
                        </a>
                    </div>
                </CardItem>
            </CardBody>
        </CardContainer>
    );
};

export default Businesscard;
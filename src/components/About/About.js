import { Container } from '@material-ui/core';
import React, { useContext } from 'react';
import codings from '../../assets/lottie/lotti.json';
import { ThemeContext } from '../../contexts/ThemeContext';
import { aboutData } from '../../data/aboutData';
import AnimationLottie from '../Animation';
import './About.css';



function About() {

    const { theme } = useContext(ThemeContext);
    return (
        <div style={{ backgroundColor: theme.secondary }}>
            <Container className="about" id="about">
                <div className="line-styling">
                    <div className="style-circle" style={{ backgroundColor: theme.primary }}></div>
                    <div className="style-circle" style={{ backgroundColor: theme.primary }}></div>
                    <div className="style-line" style={{ backgroundColor: theme.primary }}></div>
                </div>
                <div className="about-body">
                    <div className="about-description">
                        <h2 style={{ color: theme.primary }}>{aboutData.title}</h2>
                        <p style={{ color: theme.tertiary }}>{aboutData.description1}<br /><br />{aboutData.description2}</p>
                    </div>
                    <div className="about-animation">
                        <AnimationLottie animationPath={codings} />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default About

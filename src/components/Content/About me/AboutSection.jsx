import React from "react";
import classes from './AboutSection.module.css';
import Skills from "./Skills.jsx";
import PersonalSummary from "./PersonalSummary.jsx";
import Container from '../../../UI/Container.jsx';


const AboutSection = () => {
    return (
        <section id="about">
            <Container>
                <h2>About me</h2>
                <p className="description">Here you will find more information about me, what I do, and my current skills mostly <br />
                    in terms of programming and technology.</p>
                <div className={classes.info}>
                    <PersonalSummary/>
                    <Skills/>
                </div>
            </Container>
        </section>
    );
}

export default AboutSection
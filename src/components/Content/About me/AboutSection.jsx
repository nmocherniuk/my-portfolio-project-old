import { Fragment } from "react";
import Button from "../../../UI/Button.jsx";
import SkillFrame from "../../../UI/SkillFrame.jsx";
import classes from './AboutSection.module.css';
import Light from "../../../UI/Light.jsx";
import CardInfo from "../Portfolio/CardInfo.jsx";

const AboutMe = () => {
    return (
        <Fragment>

            <section className="section" id="about">
           
                <div className={classes.container}>
                    <h2>About me</h2>
                    
                    <p className="description">Here you will find more information about me, what I do, and my current skills mostly <br />
                        in terms of programming and technology.</p>
                    <div className={classes.info}>
                        <div className={classes.introduce}>
                            <h3>Get to know me!</h3>
                            <p>
                                <span> <span className={classes['styled-text']}>I am a 19-year-old student currently residing in Ivano-Frankivsk, Ukraine. </span>
                                    With a strong commitment to organization, efficiency, and hard work, I consistently seek new ideas that can be implemented effectively. </span> <br />
                                <span><span className={classes['styled-text']}>Excellent listening and learning skills.</span> I communicate effectively both in team settings and on an individual basis.
                                    My ability to motivate and utilize my skills and talents helps me achieve and exceed set objectives.</span> <br />
                                <span>Beyond university studying, <span className={classes['styled-text']}>I actively participate in IT courses and seminars</span> to enhance my practical skills and stay updated with industry trends.</span> <br />
                            </p>
                            <Button textButton='Contact me' classesButton={classes.button} />
                        </div>
                        <div className={classes.skills}>
                            <h3>Skills</h3>
                            <div className={classes['skills-list']}>
                                <SkillFrame>HTML</SkillFrame>
                                <SkillFrame>JSX</SkillFrame>
                                <SkillFrame>CSS</SkillFrame>
                                <SkillFrame>TailWind</SkillFrame>
                                <SkillFrame>SASS</SkillFrame>
                                <SkillFrame>Java Script</SkillFrame>
                                <SkillFrame>Type Script</SkillFrame>
                                <SkillFrame>React</SkillFrame>
                                <SkillFrame>TanStack Query</SkillFrame>
                                <SkillFrame>Context API</SkillFrame>
                                <SkillFrame>Redux</SkillFrame>
                                <SkillFrame>Redux toolkit</SkillFrame>
                                <SkillFrame>Next.js</SkillFrame>
                                <SkillFrame>GIT</SkillFrame>
                                <SkillFrame>GitHub</SkillFrame>
                                <SkillFrame>Figma</SkillFrame>
                                <SkillFrame>Responsive Design</SkillFrame>
                            </div>
                        </div>

                    </div>

                </div>

            </section>

        </Fragment>
    );
}

export default AboutMe
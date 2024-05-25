import React from "react";
import classes from './PersonalSummary.module.css';
import { Link } from 'react-scroll';
import Button from "../../../UI/Button.jsx";

const GRADIENT_COLORS = {
    initial: 'linear-gradient(#2D2D2D, #2D2D2D) padding-box, linear-gradient(to right, #D822FE 30%, #9B32EF 60%) border-box',
    hover: 'linear-gradient(#2D2D2D, #2D2D2D) padding-box, linear-gradient(to right, #9B32EF 30%, #D822FE 60%) border-box',
}


function PersonalSummary() {
    return (
        <div className={classes['personal-summary']}>
            <h3>Get to know me!</h3>
            <p>
                <span> <span className='bold'>I am a 19-year-old student currently residing in Ivano-Frankivsk, Ukraine. </span>
                    With a strong commitment to organization, efficiency, and hard work, I consistently seek new ideas that can be implemented effectively. </span> <br />
                <span><span className='bold'>Excellent listening and learning skills.</span> I communicate effectively both in team settings and on an individual basis.
                    My ability to motivate and utilize my skills and talents helps me achieve and exceed set objectives.</span> <br />
                <span>Beyond university studying, <span className='bold'>I actively participate in IT courses and seminars</span> to enhance my practical skills and stay updated with industry trends.</span> <br />
            </p>
            <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-99}
                duration={700}>
                <Button
                    classesButton={classes.button}
                    initialAnimation={GRADIENT_COLORS.initial}
                    hoverAnimation={GRADIENT_COLORS.hover}
                    textAnimation={true} >Contact me</Button>
            </Link>
        </div>
    );
};

export default PersonalSummary;
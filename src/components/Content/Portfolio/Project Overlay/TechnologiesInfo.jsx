import React from "react";
import Technology from "./Technology";
import classes from './TechnologiesInfo.module.css';

function TechnologiesInfo(){
    const technologies = ['Java Script', 'React', 'CSS', 'TailWind'];

    return (
        <div>
            <h4>Technologies</h4>
            <div className={classes.technologies}>
                {technologies.map((item, index) => (
                    <Technology key={index}>{item}</Technology>
                ))}
            </div>
        </div>
    );
};

export default TechnologiesInfo;

import React from "react";
import SkillFrame from "./SkillItem.jsx";
import classes from './Skills.module.css';

function Skills() {

    const skills = [
        "HTML", "JSX", "CSS", "TailWind", "SASS", "Java Script",
        "Type Script", "React", "TanStack Query", "Context API",
        "Redux", "Redux toolkit", "Next.js", "GIT", "GitHub", "Figma",
        "Responsive Design"
    ];

    return (

        <div className={classes.skills}>
            <h3>Skills</h3>
            <div className={classes['skills-list']}>
                {skills.map((skill, index) => (
                    <SkillFrame key={index}>{skill}</SkillFrame>
                ))}
            </div>
        </div>
    );
};

export default Skills;
import React from 'react';
import Button from '../../UI/Button';
import classes from './HeroArea.module.css';
import {motion, useScroll, useTransform} from 'framer-motion';

const HeroArea = () => {
    const {scrollY} = useScroll();

    const yArea = useTransform(scrollY, [0, 200], [0, -100]);
    const scaleText = useTransform(scrollY, [0, 300, 500], [0.9, 1, 1.1])
    const opacityArea = useTransform(scrollY, [0, 200, 300, 500], [1, 0.5, 0.5, 0]);

    return (
        <div className={classes.area} >
            <div className={classes.container}>
                <motion.div style={{y: yArea, scale: scaleText, opacity:opacityArea }}>
                    <div className={classes.greeting}>Hello,</div>
                    <h1>I'm Nazar Mocherniuk</h1>
                    <div>
                        And I'm a <span>Front-End Developer.</span>
                    </div>
                    <p className={classes.text}>
                        A dedicated React Developer crafting dynamic web solutions.<br />
                        I specialize in turning design blueprints into responsive,<br />
                        high-performance web applications with React.js.
                    </p>
                    <Button textButton='Download cv' classesButton={classes.button} />
                </motion.div>
            </div>
        </div>
    );
};

export default HeroArea;
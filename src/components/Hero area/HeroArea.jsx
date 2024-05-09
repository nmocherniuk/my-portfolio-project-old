import React, { useEffect, useState, useRef, Fragment } from 'react';
import Button from '../../UI/Button';
import classes from './HeroArea.module.css';
import Light from "../../UI/Light.jsx";
import { motion, useScroll, useTransform } from 'framer-motion';

const HeroArea = () => {


    const { scrollY } = useScroll();

    const yArea = useTransform(scrollY, [0, 200], [0, -120]);
    const scaleText = useTransform(scrollY, [0, 300, 500], [0.9, 1, 1.1])
    const opacityArea = useTransform(scrollY, [0, 200, 300, 500], [1, 0.5, 0.5, 0]);


    return (
        <Fragment>
            <Light color="blue" />
            <div className={classes.area} id='hero'>
                <div className={classes.container} >
                    <motion.div  initial="hidden" animate="visible" transition={{ duration: 0.5, delay: 0.25 }} variants={{ hidden: { opacity: 0, y: 75 }, visible: { opacity: 1, y: 0 } }} style={{ y: yArea, scale: scaleText, opacity: opacityArea }}>
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

        </Fragment>
    );
};

export default HeroArea;
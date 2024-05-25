import React, { Fragment } from 'react';
import { useTypewriter } from 'react-simple-typewriter';
import { motion, useScroll, useTransform } from 'framer-motion';
import Button from '../../UI/Button';
import classes from './HeroArea.module.css';
import Light from './Light';

const GRADIENT_COLORS = {
    initial: 'linear-gradient(to right, #01BDF8 30%, #0079FF 80%)',
    hover: 'linear-gradient(to right, #0079FF 10%, #01BDF8 60%)',
};

const HeroArea = () => {
    const { scrollY } = useScroll();

    const yArea = useTransform(scrollY, [0, 200], [0, -120]);
    const scaleText = useTransform(scrollY, [0, 300, 500], [0.9, 1, 1.1]);
    const opacityArea = useTransform(scrollY, [0, 200, 300, 500], [1, 0.5, 0.5, 0]);

    const [typeEffect] = useTypewriter({
        words: ['Front-End Developer.'],
        loop: {},
        typeSpeed: 90,
        deleteSpeed: 130
    });

    return (
        <Fragment>
            <Light color="blue" />
            <div className={classes.area} id='hero'>
                <div className={classes.container}>
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.5, delay: 0.25 }}
                        variants={{ hidden: { opacity: 0, y: 75 }, visible: { opacity: 1, y: 0 } }}
                        style={{ y: yArea, scale: scaleText, opacity: opacityArea }}>
                        <div className={classes.intro}>
                            Hello,
                            <h1>I'm Nazar Mocherniuk</h1>
                            And I'm a <span>{typeEffect}</span>
                        </div>
                        <p className={classes.text}>
                            A dedicated React Developer crafting dynamic web solutions.<br />
                            I specialize in turning design blueprints into responsive,<br />
                            high-performance web applications with React.js.
                        </p>
                        <Button classesButton={classes.button} initialAnimation={GRADIENT_COLORS.initial} hoverAnimation={GRADIENT_COLORS.hover}>Download cv</Button>
                    </motion.div>
                    <div className={classes.image}></div>
                </div>
            </div>
        </Fragment>
    );
};

export default HeroArea;

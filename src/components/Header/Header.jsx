import React from 'react';
import classes from "./Header.module.css";
import logo from '../../assets/logo.svg';

import {motion, useScroll, useTransform} from 'framer-motion';

function Header() {

    const {scrollY} = useScroll();
    const opacityHeader = useTransform(scrollY, [0, 200, 400], [0.8, 0.9, 1]);
    const yHeader = useTransform(scrollY, [0, 50, 70, 100], [-100, -50, -10, 0]);
    
    return (
        <motion.header className={classes.header} style={{y: yHeader, opacity: opacityHeader}}>
            <div className={classes.container}>
                <img src={logo} alt="logo" />
                <nav className={classes.navigation}>
                    <span>Home</span>
                    <span>About</span>
                    <span>Portfolio</span>
                    <span>Contact</span>
                </nav>
            </div>
            <hr className='line blue'/>
        </motion.header>
    );
}

export default Header;
import React, { useEffect, useState, Fragment } from 'react';
import classes from "./Header.module.css";
import logo from '../../assets/logo.svg';
import { motion, useScroll, useTransform, useInView, useAnimation } from 'framer-motion';
import { Link } from 'react-scroll';

function Header() {

    const { scrollY } = useScroll();

    const yHeader = useTransform(scrollY, [0, 30, 50, 70, 100, 120, 150, 160], [-100, -90, -70, -50, -40, -20, -10, 0]);
    console.log(1);

    return (
        <Fragment>
            <hr className='line blue'/>
            <motion.header className={classes.header} style={{ y: yHeader }}>
                <div className={classes.container}>
                    <img src={logo} alt="logo" />
                    <nav className={classes.navigation}>
                        <Link
                            to="hero"
                            className={classes["nav-item"]}
                            spy={true}
                            smooth={true}
                            offset={-10}
                            duration={600}>Home</Link>

                        <Link to="about"
                            className={classes["nav-item"]}
                            spy={true}
                            smooth={true}
                            offset={-103}
                            duration={600}>About</Link>
                        <Link to="portfolio"
                            className={classes["nav-item"]}
                            spy={true}
                            smooth={true}
                            offset={-103}
                            duration={600}>Portfolio</Link>
                        <Link to="contact"
                            className={classes["nav-item"]}
                            activeClass={classes["active-turquoise"]}
                            spy={true}
                            smooth={true}
                            offset={-103}
                            duration={600}>Contact</Link>
                    </nav>
                </div>
            </motion.header>
        </Fragment>

    );
}
export default Header;
    
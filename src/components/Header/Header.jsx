import React, { useEffect, useState, Fragment } from 'react';
import classes from "./Header.module.css";
import logo from '../../assets/logo.svg';
import { motion, useScroll, useTransform, useInView, useAnimation, color } from 'framer-motion';
import { Link } from 'react-scroll';

function Header() {

    const { scrollY } = useScroll();
    const [colorLine, setColorLine] = useState(null);
    const yHeader = useTransform(scrollY, [0, 30, 50, 70, 100, 120, 150, 160], [-100, -90, -70, -50, -40, -20, -10, 0]);
    const yLine = useTransform(scrollY, [0, 500, 2000, 4000], ['#01B8F8', '#BC60FB', '#F1FF4B', '#1DA9A678'])

    function handleSetActive(color) {
        setColorLine(color);
    }

    return (
        <Fragment>
            <motion.header className={classes.header} style={{ y: yHeader }}>
                <div className={classes.container}>
                    <Link to="hero"
                        className={classes["nav-item"]}
                        spy={true}
                        onSetActive={() => handleSetActive("var(--blue-color)")}
                        smooth={true}
                        offset={-10}
                        duration={700}> <img src={logo} alt="logo" />
                    </Link>

                    <nav className={classes.navigation}>
                        <Link to="about"
                            className={classes["nav-item"]}
                            spy={true}
                            activeClass={classes['active-about']}
                            onSetActive={() => handleSetActive("var(--purple-color)")}
                            smooth={true}
                            offset={-103}
                            duration={700}>About</Link>
                        <Link to="portfolio"
                            className={classes["nav-item"]}
                            spy={true}
                            activeClass={classes['active-portfolio']}
                            onSetActive={() => handleSetActive("var(--yellow-color)")}
                            smooth={true}
                            offset={-100}
                            duration={700}>Portfolio</Link>
                        <Link to="contact"
                            className={classes["nav-item"]}
                            spy={true}
                            activeClass={classes['active-contact']}
                            onSetActive={() => handleSetActive("var(--turquoise-color)")}
                            smooth={true}
                            offset={-100}
                            duration={700}>Contact</Link>
                    </nav>
                </div>
                <motion.hr className={`line`} style={{ borderColor: colorLine, transition: 'border-color 0.2s ease-in-out' }} />

            </motion.header>
        </Fragment>

    );
}
export default Header;

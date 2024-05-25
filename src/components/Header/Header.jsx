import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-scroll';
import classes from "./Header.module.css";
import logo from '../../assets/logo.svg';
import navMenu from '../../assets/Portfolio image/nav-bar.svg';
import NavItem from './NavItem';
import NavItemList from './NavItemList';
import { useDispatch } from 'react-redux';
import { overlayActions } from '../../store/overlay-slice';

function Header() {
    const dispatch = useDispatch();
    const { scrollY } = useScroll();
    const [colorLine, setColorLine] = useState(null);
    const yHeader = useTransform(scrollY, [0, 30, 50, 70, 100, 120, 150, 160], [-100, -90, -70, -50, -40, -20, -10, 0]);

    function handleClickIcon() {
        dispatch(overlayActions.navMenuOverlayShow());
    }

    return (
        <motion.header className={classes.header} style={{ y: yHeader }}>
            <div className={classes.container}>
                <Link to="hero" spy={true} onSetActive={() => setColorLine('var(--blue-color)')} smooth={true} offset={0} duration={700}>
                    <img src={logo} alt="logo" />
                </Link>

                <NavItemList setColorLine={setColorLine} />
            </div>
            <motion.hr className={classes.line} style={{ borderColor: colorLine, transition: 'border-color 0.2s ease-in-out' }} />
        </motion.header>
    );
};
export default Header;

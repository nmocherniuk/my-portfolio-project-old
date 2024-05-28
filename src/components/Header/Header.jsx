import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-scroll';
import classes from "./Header.module.css";

import navMenu from '../../assets/Portfolio image/nav-bar.svg';
import NavItem from './NavItem';
import NavItemList from './NavItemList';


function Header() {

    const { scrollY } = useScroll();
    const [colorLine, setColorLine] = useState(null);
    const yHeader = useTransform(scrollY, [0, 30, 50, 70, 100, 120, 150, 160], [-100, -90, -70, -50, -40, -20, -10, 0]);


    return (
        <motion.header className={classes.header} style={{ y: yHeader }}>
            <div className={classes.container}>
                <NavItemList setColorLine={setColorLine} />
            </div>
            <motion.hr className={classes.line} style={{ borderColor: colorLine, transition: 'border-color 0.2s ease-in-out' }} />
        </motion.header>
    );
};
export default Header;

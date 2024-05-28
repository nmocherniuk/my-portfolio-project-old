import React, { useState, useEffect } from "react";
import classes from './NavItemList.module.css';
import NavItem from "./NavItem";
import logo from '../../assets/logo.svg';
import { FaBars } from "react-icons/fa";

function NavItemList({ setColorLine }) {
    const [mobile, setMobile] = useState(false);
    const navLinks = [
        { to: "about", color: "purple", label: "About", offset: -103 },
        { to: "portfolio", color: "yellow", label: "Portfolio", offset: -102 },
        { to: "contact", color: "turquoise", label: "Contact", offset: -102 },
    ];

    useEffect(() => {
        if (mobile) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [mobile]);

    const toggleMobileMenu = () => {
        setMobile(prevState => !prevState);
    };

    const closeMobileMenu = () => {
        setMobile(false);
    };

    return (
        <nav className={classes.navigation} >
            <NavItem idSection="hero" setActiveSection={setColorLine} color="blue"><img src={logo} alt="logo" onClick={closeMobileMenu}/></NavItem>
            <ul className={`${classes["nav-links"]} ${mobile ? classes["nav-links-mobile"] : ''} `}>
                {navLinks.map((link) => (
                    <li key={link.to}>
                        <NavItem idSection={link.to} setActiveSection={setColorLine} color={link.color} offset={link.offset} closeMobileMenu={closeMobileMenu}>
                            {link.label}
                        </NavItem>
                    </li>
                ))}
            </ul>
            <button className={classes["menu-icon"]} onClick={toggleMobileMenu}><FaBars/></button>
        </nav>
    );
}

export default NavItemList;

import React from "react";
import classes from './NavItemList.module.css';
import NavItem from "./NavItem";

function NavItemList({ setColorLine }) {

    const navLinks = [
        { to: "about", color: "purple", label: "About", offset: -103 },
        { to: "portfolio", color: "yellow", label: "Portfolio", offset: -102 },
        { to: "contact", color: "turquoise", label: "Contact", offset: -102 },
    ];

    return (
            <nav className={classes.navigation}>
                <ul>
                    {navLinks.map((link) => (
                        <NavItem key={link.to} idSection={link.to} setActiveSection={setColorLine} color={link.color} offset={link.offset}>
                            {link.label}
                        </NavItem>
                    ))}
                </ul>
            </nav>

    );
};

export default NavItemList;
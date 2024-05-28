import React from "react";
import { Link } from 'react-scroll';
import classes from './NavItem.module.css';


function NavItem({ children, idSection, setActiveSection, color, closeMobileMenu, offset = 0 }) {
    return (
       
            <Link to={idSection} 
                onClick={closeMobileMenu}
                className={classes["nav-item"]}
                spy={true}
                activeClass={classes[`active-${idSection}`]}
                onSetActive={() => setActiveSection(`var(--${color}-color)`)}
                smooth={true}
                offset={offset}
                duration={700}>{children}</Link>

    );
};

export default NavItem;
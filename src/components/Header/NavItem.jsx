import React from "react";
import { Link } from 'react-scroll';
import classes from './NavItem.module.css';


function NavItem({ children, idSection, setActiveSection, color, offset = 0 }) {
    return (
        <li>
            <Link to={idSection}
                className={classes["nav-item"]}
                spy={true}
                activeClass={classes[`active-${idSection}`]}
                onSetActive={() => setActiveSection(`var(--${color}-color)`)}
                smooth={true}
                offset={offset}
                duration={700}>{children}</Link>
        </li>
    );
};

export default NavItem;
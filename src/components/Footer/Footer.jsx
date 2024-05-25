import React from 'react';
import classes from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={classes.footer}>
            <div className={classes.container}>
                <span>
                    <h4><span className={classes.highlighted}>Nazar</span> Mocherniuk</h4>
                    <p>A dedicated React Developer crafting dynamic web solutions. I specialize in turning
                        design blueprints into responsive, high-performance web applications with React.js. </p>
                </span>
                <span>
                    <h4><span className={classes.highlighted}>Social</span> Media</h4>
                </span>
            </div>
            <hr />
            <p>&copy; Copyright 2024. Mady by Nazar Mocherniuk</p>
        </footer>
    );
};

export default Footer;
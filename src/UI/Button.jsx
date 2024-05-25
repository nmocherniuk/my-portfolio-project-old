import classes from './Button.module.css';
import { motion } from 'framer-motion';
const Button = ({ children, classesButton, initialAnimation, hoverAnimation }) => {
    return (
        <motion.button
            className={`${classes.button} ${classesButton}`}
            initial={{ background: initialAnimation }}
            whileHover={{ background: hoverAnimation }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}>
            <span>{children}</span>
        </motion.button>
    )
}

export default Button;

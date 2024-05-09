import classes from './Button.module.css';

const Button = ({ textButton, classesButton }) => {
    return (
        <button className={`${classes.button} ${classesButton}`}>{<span>{textButton}</span>}</button>
    )
}

export default Button;

import classes from './Light.module.css';

const Light = ({color}) => {
    return (
        <div className={classes.container}>
            <div className={`${classes.light} ${classes[color]}`}></div>
        </div>
    );
}

export default Light;
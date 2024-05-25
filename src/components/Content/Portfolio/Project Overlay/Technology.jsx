import classes from './Technology.module.css';

const Technology = ({children}) => {
    return (
        <div className={classes.frame}>
                {children}
        </div>
    )
}

export default Technology;
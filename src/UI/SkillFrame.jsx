import classes from './SkillFrame.module.css';

const SkillFrame = ({children}) => {
    return (
        <div className={classes.frame}>
            {children}
        </div>
    );
}

export default SkillFrame;
import classes from './SkillItem.module.css';

const SkillItem = ({children}) => {
    return (
        <div className={classes.frame}>
            {children}
        </div>
    );
}

export default SkillItem;
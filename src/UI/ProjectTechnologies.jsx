import classes from './ProjectTechnologies.module.css';

const ProjectTechnologies = ({children}) => {
    return (
        <div className={classes.frame}>
                {children}
        </div>
    )
}

export default ProjectTechnologies;
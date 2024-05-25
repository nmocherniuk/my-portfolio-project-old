import { useState } from 'react';
import { useDispatch} from 'react-redux';
import { overlayActions } from '../../../store/overlay-slice';
import classes from './Card.module.css';


const Card = ({ src, alt, description}) => {
    const dispatch = useDispatch();
    const [isHovered, setIsHovered] = useState(false);

    function handleClickCard() {
        dispatch(overlayActions.projectOverlayShow());
    }

    return (
        <div
            className={classes.card}
            onClick={handleClickCard}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            <div className={classes['project-image']}>
                <img src={src} alt={alt} />
            </div>
            <div className={classes['project-desctiption']}>
                <h5>{description.title}</h5>
                <span>
                    {!isHovered ? description.description : 'Click to see project details ⎯⎯⎯⎯ '}
                </span>
            </div>
        </div>
    );
}

export default Card;


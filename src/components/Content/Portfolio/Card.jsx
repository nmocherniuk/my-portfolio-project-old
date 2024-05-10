import classes from './Card.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { overlayActions } from '../../../store/overlay-slice';


const Card = ({ src, alt, description, mainProject = false }) => {
    const dispatch = useDispatch();
    const overlay = useSelector(state => state.overlay.overlay)
    function handleClickCard () {
        dispatch(overlayActions.overlayShow())
    }

    return (
        <div className={`${classes.card} ${mainProject ? classes['main-div'] : null}`} onClick={handleClickCard}>
            <img src={src} alt={alt} />
            <div className={mainProject ? classes['main-div'] : null} >
                <h5>{description.title}</h5>
                {!mainProject && <span >{description.description}</span>}
                {mainProject && <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                    sunt in culpa qui officia deserunt mollit anim id est laborum.</span>}
            </div>
        </div>
    );
}

export default Card;
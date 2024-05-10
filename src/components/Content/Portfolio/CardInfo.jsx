import Modal from "../../../UI/Modal";
import ProjectTechnologies from "../../../UI/ProjectTechnologies";
import arrow from "../../../assets/Portfolio image/arrow.svg";
import image from "../../../assets/Portfolio image/image1.jpg";
import { useDispatch, useSelector } from "react-redux";
import classes from "./CardInfo.module.css";
import { overlayActions } from "../../../store/overlay-slice";
const CardInfo = ({ title, description, src, alt }) => {
    const dispatch = useDispatch();
    const overlay = useSelector(state => state.overlay.overlay)
    function hideOverlayHandler() {
        dispatch(overlayActions.overlayHide())
    }

    return (
        <Modal overlay={overlay} onHideCart={hideOverlayHandler}>
            <div className={classes['overlay-project']}>
                <div>
                    <img src={arrow} alt="arrow" />
                    <span>Back to project</span>
                </div>
                <hr />
                <div className={classes.content}>
                    <div>
                        <h3>Title</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate</p>
                        <img src={image} alt="image" className={classes['project-image']} />
                    </div>

                    <div>
                        <h4>Technologies</h4>
                        <div className={classes.technologies}>
                            <ProjectTechnologies>Java Script</ProjectTechnologies>
                            <ProjectTechnologies>React</ProjectTechnologies>
                            <ProjectTechnologies>CSS</ProjectTechnologies>
                            <ProjectTechnologies>TailWind</ProjectTechnologies>
                        </div>

                    </div>
                    <div>
                        <h4>WebSite</h4>
                        <a href="#">http://link.gg.cool.com</a>
                    </div>
                    <div>
                        <h4>GitHub</h4>
                        <a href="#">http://link.gg.cool.com</a>
                    </div>
                </div>
            </div>

        </Modal>
    )
}

export default CardInfo;
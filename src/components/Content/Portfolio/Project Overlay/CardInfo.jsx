import Modal from "../../../../UI/Modal";
import arrow from "../../../../assets/Portfolio image/arrow.svg";
import image from "../../../../assets/Portfolio image/image1.jpg";
import { useDispatch, useSelector } from "react-redux";
import classes from "./CardInfo.module.css";
import { overlayActions } from "../../../../store/overlay-slice";
import TechnologiesInfo from "./TechnologiesInfo";
import AboutProjectInfo from "./AboutProjectInfo";
import MainProjectInfo from "./MainProjectInfo";
import MediaProjectInfo from "./MediaProjectInfo";

const CardInfo = ({ title, description, src, alt }) => {
    const dispatch = useDispatch();
    function hideOverlayHandler() {
        dispatch(overlayActions.overlayHide())
    }

    return (
        <Modal onHideCart={hideOverlayHandler}>
            <div className={classes['overlay-project']}>
                <div onClick={hideOverlayHandler}>
                    <img src={arrow} alt="arrow" />
                    <span>Back to project</span>
                </div>
                <hr />
                <div className={classes.content}>
                    <MainProjectInfo title="Title" imageSrc={image} imageAlt="Title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</MainProjectInfo>
                    <AboutProjectInfo>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate </AboutProjectInfo>
                    <TechnologiesInfo />
                    <MediaProjectInfo header="WebSite" link="#" >http://link.gg.cool.com</MediaProjectInfo>
                    <MediaProjectInfo header="GitHub"  link="#" >http://link.gg.cool.com</MediaProjectInfo>
                </div>
            </div>
        </Modal>
    )
}

export default CardInfo;
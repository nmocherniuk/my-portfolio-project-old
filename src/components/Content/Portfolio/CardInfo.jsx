import Modal from "../../../UI/Modal";
import ProjectTechnologies from "../../../UI/ProjectTechnologies";
import arrow from "../../../assets/Portfolio image/arrow.svg";
import image from "../../../assets/Portfolio image/image1.jpg";

import classes from "./CardInfo.module.css";
const CardInfo = ({ title, description, src, alt }) => {
    return (
        <Modal>
            <div className={classes['overlay-project']}>
                <div>
                    <img src={arrow} alt="arrow" />
                    <span>Back to project</span>
                </div>
                <hr />
                <div className={classes.content}>
                    <h3>Title</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor</p>
                    <img src={image} alt="image" />
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
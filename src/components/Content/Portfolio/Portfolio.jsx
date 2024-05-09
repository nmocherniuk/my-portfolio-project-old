import Card from './Card';
import classes from './Portfolio.module.css'

import image_1 from './../../../assets/Portfolio image/image1.jpg';
import image_2 from './../../../assets/Portfolio image/image2.jpg';
import image_3 from './../../../assets/Portfolio image/image3.jpg';
import image_4 from './../../../assets/Portfolio image/image4.jpg';
import image_5 from './../../../assets/Portfolio image/image5.jpg';
import image_6 from './../../../assets/Portfolio image/image6.jpg';


const DESCRIPTION = {
    title: "Title",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
}

const PortfolioSection = () => {
    return (
        <section className={classes.section}>
            <div className={classes.container}>
                <h2 className={classes.title}>Portfolio</h2>
                <p className={classes.description}>Here you will find some of the personal and clients projects that I created with each <br /> 
                 project containing its own case study.</p>
                <div className={classes['card-container']}>
                    <Card src={image_1} description={DESCRIPTION}/>
                    <Card src={image_2} description={DESCRIPTION}/>
                    <Card src={image_3} description={DESCRIPTION}/>
                    <Card src={image_4} description={DESCRIPTION} mainProject={true}/>
                    <Card src={image_5} description={DESCRIPTION}/>
                    <Card src={image_6} description={DESCRIPTION}/>
                </div>
            </div>
        </section>
    );
}

export default PortfolioSection;
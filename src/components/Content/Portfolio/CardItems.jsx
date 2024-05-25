import React from "react";
import classes from './CardItems.module.css';
import Card from './Card';
import image_1 from './../../../assets/Portfolio image/image1.jpg';
import image_2 from './../../../assets/Portfolio image/image2.jpg';
import image_3 from './../../../assets/Portfolio image/image3.jpg';
import image_4 from './../../../assets/Portfolio image/image4.jpg';
import image_5 from './../../../assets/Portfolio image/image5.jpg';
import image_6 from './../../../assets/Portfolio image/image6.jpg';

const DESCRIPTION = {
    title: "Title",
    description: "Lorem ipsum dolor sit amet, consectetur ",
}

function CardItems() {
    const images = [image_1, image_2, image_3, image_4, image_5, image_6];

    return (
        <div className={classes['card-container']}>
            {images.map((image, index) => (
                <Card
                    key={index}
                    src={image}
                    description={DESCRIPTION}
                />
            ))}
        </div>
    );
};

export default CardItems;

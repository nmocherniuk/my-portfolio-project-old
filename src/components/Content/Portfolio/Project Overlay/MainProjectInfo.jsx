import React from "react";


function MainProjectInfo({children, title, imageSrc, imageAlt}) {
    return (
        <div>
            <h3>{title}</h3>
            <p>{children}</p>
            <img src={imageSrc} alt={imageAlt} />
        </div>
    );
};

export default MainProjectInfo;
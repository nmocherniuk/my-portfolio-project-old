import React from "react";

function AboutProjectInfo({children}) {
    return (
        <div>
            <h4>About project</h4>
            <p>{children}</p>
        </div>
    );
};

export default AboutProjectInfo;

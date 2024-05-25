import React from "react";

function MediaProjectInfo({header, link, children}) {
    return (
        <div>
            <h4>{header}</h4>
            <a href={link}>{children}</a>
        </div>
    );
};

export default MediaProjectInfo;
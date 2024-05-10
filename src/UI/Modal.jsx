import React, { Fragment } from "react";
import ReactDOM  from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = props => {
    return ( 
        <div className={classes.backdrop} onClick={props.onClick}></div>
    )
}


const ModalOverlay = props => {
    return (
        <aside className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </aside>
    )
}

const portalElement = document.getElementById('overlay')

const Modal = props => {
    
    return ( 
        <Fragment>
            {ReactDOM.createPortal(<Backdrop onClick={props.onHideCart}/>, portalElement)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
        </Fragment>
    )
};

export default Modal;
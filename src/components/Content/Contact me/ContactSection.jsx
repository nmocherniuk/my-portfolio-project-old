import { Fragment } from 'react';
import classes from './ContactSection.module.css';
import Form from './Form';
import Light from "../../../UI/Light.jsx";
const ContactSection = () => {
    return (
        <Fragment>
            <hr className='line turquoise' />
            <Light color="turquoise" />
            <section className="section" id='contact'>
                <div className={classes.container}>
                    <h2>Contact with me</h2>
                    <p className="description">Get in touch or shoot me an email directly on nazar.mocherniuk@gmail.com. <br />
                        I will get back to you as soon as possible</p>
                    <Form />
                </div>

            </section>
        </Fragment>

    );
}

export default ContactSection;
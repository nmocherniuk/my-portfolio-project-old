import { Fragment } from 'react';
import classes from './ContactSection.module.css';
import Form from './Form';
import Container from '../../../UI/Container.jsx';

const ContactSection = () => {
    return (
        <Fragment>
            <section className={classes['contact-section']} id='contact'>
                <Container>
                    <h2>Contact with me</h2>
                    <p className="description">Get in touch or shoot me an email directly on <span className='bold'>nazar.mocherniuk@gmail.com</span>.<br />
                        I will get back to you as soon as possible</p>
                    <Form />
                </Container>

            </section>
        </Fragment>

    );
}

export default ContactSection;
import classes from './ContactSection.module.css';
import Form from './Form';

const ContactSection = () => {
    return ( 
        <section className={classes.section}>
            <div className={classes.container}>
                <h2 className={classes.title}>Contact with me</h2>
                <p className={classes.description}>Get in touch or shoot me an email directly on nazar.mocherniuk@gmail.com. <br /> 
                I will get back to you as soon as possible</p>
                <Form/>
            </div>
            
        </section>
    );
}

export default ContactSection;
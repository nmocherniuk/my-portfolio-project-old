import React from 'react'; // import React
import Button from '../../../UI/Button';
import classes from './Form.module.css';

const Form = () => {
    return (
        <form className={classes.form}>
            <div> 
                <label htmlFor="name">Name</label> 
                <input type="text" id="name" name="name" placeholder="Enter Your Name" />
            </div> 
            <div> 
                <label htmlFor="email">Email</label> 
                <input type="email" id="email" name="email" placeholder="Enter Your Email" />
            </div> 
            <div> 
                <label htmlFor="message">Message</label> 
                <textarea required cols="30" rows="10" name="message" id="message" placeholder="Enter Your Message"></textarea>
            </div> 
            <Button textButton="submit" classesButton={classes.button} />
        </form>
    );
}

export default Form;
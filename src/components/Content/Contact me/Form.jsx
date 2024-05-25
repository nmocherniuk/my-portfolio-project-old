import React from 'react'; // import React
import Button from '../../../UI/Button';
import classes from './Form.module.css';
import { useForm } from '@formspree/react';
import Input from '../../../UI/Input';

const COLORS = {
    initial: 'linear-gradient(to right, #5672B5 10%, #1DA9A5 80%)',
    hover: 'linear-gradient(to right, #1DA9A5 10%, #5672B5 80%)',
}

const Form = () => {
    const [state, handleSubmit] = useForm("mbjnbbve");
    if (state.succeeded) {
        return <span className={classes['response-form']}>Thank you for reaching out!</span>;
    }
    return (
        <form onSubmit={handleSubmit} className={classes.form}>
            <Input label="Name" type="text" id="name" placeholder="Enter Your Name" prefix="Name" errors={state.errors}/>
            <Input label="Email" type="email" id="email" placeholder="Enter Your Email" prefix="Email" errors={state.errors}/>
            <Input label="Message" type="text" id="message" placeholder="Enter Your Message" prefix="Message" errors={state.errors} textArea={true}/>
            <Button type="submit" disabled={state.submitting} classesButton={classes.button} initialAnimation={COLORS.initial} hoverAnimation={COLORS.hover}>submit</Button>
        </form>
    );
}

export default Form;
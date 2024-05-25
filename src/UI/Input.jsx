import React from "react";
import { ValidationError } from "@formspree/react";

function Input({label, type, id, placeholder, prefix, errors, textArea=false}) {
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            {!textArea && <input type={type} id={id} name={id} placeholder={placeholder} />}
            {textArea && <textarea required type="text" cols="30" rows="10" name="message" id="message" placeholder="Enter Your Message"/>}
            <ValidationError prefix={prefix} field={id} errors={errors} />
        </div>
    );
};

export default Input;
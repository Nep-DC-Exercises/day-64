import React, { useState } from "react";

const ContactForm = () => {
    const [state, setState] = useState({
        contact_name: "",
        contact_email: "",
        contact_message: "",
        isSubmitted: false
    });

    // prevents the use of writing several handleChange functions by deconstructing name and value from the onchange event
    const handleChange = e => {
        const { name, value } = e.target;
        setState({ ...state, [name]: value });
    };

    const handleClick = () => {
        setState({...state, isSubmitted: true})
    }

    return (
        <>
            <h1>Contact Us</h1>
            {state.isSubmitted ? (
                <div>
                    <h2> Thank you for your submission {state.contact_name}</h2>
                </div>
            ) : (
                <form>
                    <label>
                        Your Name
                        <input
                            type="text"
                            placeholder="Your Name"
                            name="contact_name"
                            value={state.name}
                            onChange={handleChange}
                        ></input>
                    </label>
                    <label>
                        Your Email
                        <input
                            type="email"
                            placeholder="you@email.com"
                            name="contact_email"
                            value={state.email}
                            onChange={handleChange}
                        ></input>
                    </label>
                    <label>
                        Your Message
                        <textarea
                            name="contact_message"
                            placeholder="What do you want to say?"
                            value={state.message}
                            onChange={handleChange}
                        />
                    </label>
                    <button onClick={handleClick}>Send Message</button>
                </form>
            )}
        </>
    );
};

export default ContactForm;

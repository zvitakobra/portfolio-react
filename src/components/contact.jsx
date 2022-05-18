import React, { useState } from 'react';

function Contact() {
    const [email, setEmail] = useState("");
    const [msg, setMsg] = useState("");

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        name === 'email' ? setEmail(value) : setMsg(value); 
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert('email: ' + email + ' msg: ' + msg);
    }

    return(
        <>
            <div className='contact zk-content' id='contact'>
                <div className='zk-block zk-bg-color'>
                    <div className='zk-text-block'>
                        <h3>Pis kaj</h3>
                        <form onSubmit={handleSubmit}>
                            <input 
                                type="email" 
                                name="email"
                                value={email}
                                onChange={handleChange}
                                placeholder="Insert your email"
                            />
                            <textarea 
                                name="msg" 
                                id="msg" 
                                cols="30" 
                                rows="10" 
                                value={msg} 
                                onChange={handleChange} 
                                placeholder="Insert your message"
                            ></textarea>
                            <input type="submit" />
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
 
export default Contact;

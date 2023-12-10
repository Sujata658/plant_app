import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

const Signin = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (<>

        <div className="signin_box">
            <div className="signin_box__form">
                <form onSubmit={handleSubmit}>
                    <div className='signin-title'>Sign In</div>
                    <div className="iconinput">
                        <div className="signinicon">
                        <FontAwesomeIcon icon={faEnvelope} />
                        </div>
                    
                    <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                        <div className="iconinput">
                        <div className="signinicon">
                        <FontAwesomeIcon icon={faLock} />
                        </div>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                        </div>
                        
                        <button type="submit" className='button button_green'>Sign in</button>
                </form>
            </div>
        </div>
            <p style={{padding: '30px', textAlign: 'center'}}>The state value will be shown in the console.</p>
            </>
    );
};

export default Signin;

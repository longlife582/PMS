import { Link } from 'react-router-dom';
import React from 'react';
import '../style/model.css'
import { useState } from 'react';

const SignUpForm = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const toggleModal = () => {
        setIsModalVisible(!isModalVisible);
      };



    return ( 
        <>
            <div className="logo-div">
                <h3 className="logo">P<span>M</span>S</h3>
            </div>
            <div className="signUpdiv">
                <form className="authForm">
                    <h2>Create Account</h2>
                    <div className="formControl">
                        <label htmlFor="fName">Full Name</label>
                        <input type="text" id="fName" />
                    </div>
                    <div className="formControl">
                        <label htmlFor="email">Email Address</label>
                        <input type="text" id="email" />
                    </div>
                    <div className="formControl">
                        <label htmlFor="contact">Contact</label>
                        <input type="text" id="contact" />
                    </div>
                    <div className="formControl">
                        <label htmlFor="propertyName">
                            Property Name <span>(Optional)</span>
                        </label>
                        <input type="text" id="propertyName" />
                    </div>
                    <div className="formControl">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" />
                    </div>
                    <div className="formControl">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input type="password" id="confirmPassword" />
                    </div>
                    <p className="message"></p>
                    <button className="submit-button" >Create Account</button>
                    <h6>Already have an account? <Link to="/login">Login</Link></h6>
                </form>
                <p className={ `modal-overlay ${isModalVisible ? 'visible' : ''}`} >testing popup</p>
                <button onClick={toggleModal}>dfg</button>
            </div>
        </>
    );
}
 
export default SignUpForm;

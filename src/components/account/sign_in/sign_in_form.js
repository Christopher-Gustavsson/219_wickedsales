import React from 'react';
import { reduxForm, Field } from 'redux-form';
import Input from '../../general/input';

const SignInForm = props => {

    // console.log('Sign In Form Props:', props);
    const {handleSubmit, signIn} = props;

    return(
        <form onSubmit={handleSubmit(signIn)}>
            

            <div className="row">
                <Field col="s6" id="username" name="username" component={Input} type="text" label="Username"/>
            

            
                <Field col="s6" id="email" name="email" component={Input} label="Email"/>

            </div>
            
            
            
            <div className="row">
                <Field col="s6" id="password" name="password" component={Input} type="password" label="Password"/>
            
                <Field col="s6" id="confirmPassword" name="confirmPassword" component={Input} type="password" label="Confirm Password"/>
            </div>
            
            
                
            <div className="row">
                <div className="col s12 right-align">
                    <button className="btn blue darken-2">Sign In</button>
                </div>
            </div>
        </form>
    );
}

function validate({username, email, password, confirmPassword})
{
    
    const errors = {};

    if(!username)
    {
        errors.username = "Please enter your username";
    }

    if(!email)
    {
        errors.email = "Please enter your email";
    }
    
    if(!password)
    {
        errors.password = "Please enter your password";
    }

    if(!confirmPassword)
    {
        errors.confirmPassword ="Required";
    }

    else if (password !== confirmPassword)
    {
        errors.confirmPassword = "Please confirm password";
    }

    return errors;
}

export default reduxForm({
    form: 'sign-in-form',
    validate: validate
})(SignInForm);

import React, { useContext, useState } from 'react';
import './SignUp.css'
import { Link } from 'react-router-dom';
import { authContext } from '../AuthProvider/AuthProvider';
const SignUp = () => {
     const [error, setError] = useState("")
     const {signup, setUser} = useContext(authContext)
    const submitSignUp = (event)=>{
        setError("")
        event.preventDefault()
        console.log(event.target)
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        const confiramPassword = form.confiramPassword.value

        console.log(email, password, confiramPassword)
        if(password !== confiramPassword){
            setError("Please give currect  Password")
            return
        }

        signup(email, password) 
        .then(result =>{
            const signUpUser = result.user
            console.log(signUpUser)
            setUser(signUpUser)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage)
          });
    }
    return (
        <div className='resister-area'>
            <h1>please sign up</h1>
            <form onSubmit={submitSignUp}>
            <label htmlFor="email">Email*</label>
            <input type="email" name='email' placeholder='Enter Email' />
            <label htmlFor="password">Password</label>
            <input type="password" name='password' placeholder='Enter password' />
            <label htmlFor="confiramPassword">Confiram password</label>
            <input type="password" name='confiramPassword' placeholder='Confiram password' />
            <button type='submit'>Submit</button>
            </form>
            <h6>Already I have an Account <Link to="/login">Login</Link></h6>
            <h6>{error}</h6>
        </div>
    );
};

export default SignUp;
import React, { useContext, useState } from 'react';
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { authContext } from '../AuthProvider/AuthProvider';
const Login = () => {
    const {signIn, user, setUser} = useContext(authContext)
    const navigate = useNavigate()
    const location = useLocation()
    const [show, setShow] = useState(false)
    console.log(location)
    const from = location.state?.from?.pathname || '/'

    const handleSingIn = (event) =>{
        event.preventDefault()
        console.log(event.target)
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password)
        signIn(email, password) 
        .then(result =>{
            const signUpUser = result.user
            setUser(signUpUser)
            console.log(signUpUser)
            navigate(from, {replace : true})
            form.reset()
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage)
          });
    }
    return (
        <div className='resister-area'>
            <h1>please sign in</h1>
            <form onSubmit={handleSingIn}>
            <label htmlFor="email">Email*</label>
            <input type="email" name='email' placeholder='Enter Email' />
            <label htmlFor="password">Password</label>
            <input type={show?"text":"password"} name='password' placeholder='Enter password' />
            <p onClick={()=> setShow(!show)}><small>
                {
                    show?<h1>hide password</h1>: <h1>show passwpod</h1>
                }</small></p>
            <button type='submit'>Submit</button>
            </form>
            <h6>create new Account <Link to="/signup">signup</Link></h6>
            {/* <h6>{error}</h6> */}
        </div>
    );
};

export default Login;
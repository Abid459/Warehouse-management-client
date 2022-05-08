import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuthState, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import axios from 'axios';
// import { useUpdatePassword } from 'react-firebase-hooks/auth';

const LogIn = () => {
    const  navigate = useNavigate();
    const location = useLocation();
    const [email, setEmail] = useState('')
    // let auth = useAuth();

    let from = location.state?.from?.pathname || "/";
    const [user] = useAuthState(auth);


    const [
        signInWithEmailAndPassword,
        user1,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] = useSignInWithGoogle(auth);
    const [sendPasswordResetEmail, sending, errorReset] = useSendPasswordResetEmail(
        auth
    );

    const handleSignin = async e => {
        e.preventDefault();
        setEmail(e.target.email.value)
        const password = e.target.password.value;
        signInWithEmailAndPassword(email, password);
        const { data } = await axios.post('https://shrouded-refuge-18359.herokuapp.com/login', { email })
        localStorage.setItem('accessToken', data);
        navigate(from, { replace: true });
        console.log('email login succes', data)
    }
    const handleGoogleSignIn = async () => {
        signInWithGoogle();
    }

    if (user && userGoogle) {

        const jwtGoogle = async()=>{

            const { data } = await axios.post('https://shrouded-refuge-18359.herokuapp.com/login', { email: user?.email })
            localStorage.setItem('accessToken', data);
            navigate(from, { replace: true });
            console.log('accessToken For gooogle',data)
        }
        jwtGoogle();

        console.log('google user', user?.email)
    }

    const handleReset = async () => {
        if (email) {
            await sendPasswordResetEmail(email);
            toast.success('Verification Email sent')

        } else {
            toast.error("Please enter your email and try again")
        }
        // alert('Sent email');
    }
    return (
        <div className='log-in'>
            <div className="form">
                <form onSubmit={handleSignin}>
                    <div className='w-100 py-2'>
                        <h5 className=''>Log in</h5>
                    </div>
                    <input type="email" onChange={(e) => setEmail(e.target.value)} name="email" id="" placeholder='Your email' />
                    <input type="password" className='last-inp' name="password" id="" placeholder='Password' />
                    <div className='w-100'>
                        <p className='pass-reset' onClick={handleReset}>Forgot password?</p>
                    </div>
                    <button type='submit'>Log In</button>
                    <p>New user? <span onClick={() => navigate('/signUp')}>register here</span></p>
                </form>
                <div className='mt-3'>
                    or
                    <button className='google-login' onClick={handleGoogleSignIn}>Log In with google</button>
                </div>
            </div>
        </div>
    );
};

export default LogIn;
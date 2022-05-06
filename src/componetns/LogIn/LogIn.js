import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
// import { useUpdatePassword } from 'react-firebase-hooks/auth';

const LogIn = () => {
    const [email, setEmail] = useState('')
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] = useSignInWithGoogle(auth);
    const [sendPasswordResetEmail, sending, errorReset] = useSendPasswordResetEmail(
        auth
    );

    const handleSignin = e => {
        e.preventDefault();
        // const email = e.target.email.value;
        setEmail(e.target.email.value)
        const password = e.target.password.value;
        signInWithEmailAndPassword(email, password);
    }


    const handleReset = async () => {
        if(email){
            await sendPasswordResetEmail(email);
            toast.success('Verification Email sent')

        }else{
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
                    <input type="email" onChange={(e)=>setEmail(e.target.value)} name="email" id="" placeholder='Your email' />
                    <input type="password" className='last-inp' name="password" id="" placeholder='Password' />
                    <div className='w-100'>
                    <p className='pass-reset' onClick={handleReset}>Forgot password?</p>
                    </div>
                    <button type='submit'>Log In</button>
                    <p>New user? <span onClick={() => navigate('/signUp')}>register here</span></p>
                </form>
                <div className='mt-3'>
                    or
                    <button className='google-login' onClick={() => signInWithGoogle()}>Log In with google</button>
                </div>
            </div>
        </div>
    );
};

export default LogIn;
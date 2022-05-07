import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import toast from 'react-hot-toast';
// import auth from '../../firebase.init';

const Register = () => {
    const navigate = useNavigate();
    const [errMessage,setErrMessage]= useState('')
    const [message,setMessage] = useState('');
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});
    const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] = useSignInWithGoogle(auth);

      console.dir(error)
    const handleRegister = e =>{
        e.preventDefault()
        const email =e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;
        if(password === confirmPassword){
            createUserWithEmailAndPassword(email,password)
            error?.code && setErrMessage(error.message);
        }else{
            setErrMessage('Please Confirm your password');
        }
    }
    if(user || userGoogle){
        toast.success('User Created')
        // setMessage('User Craeted')
        navigate('/logIn')
    }

    setTimeout(()=>{
        setErrMessage('')
    },5000)
    // user && setMessage('user Created')
    
    return (
        <div className='sign-up'>
            <div className="form">
                <form onSubmit={handleRegister}>
                    <div className='w-100 py-2'>
                        <h5 className=''>Sign Up</h5>
                    </div>
                    <input type="email" name="email"  placeholder='Your email' />
                    <input type="password" name="password"  placeholder='Password' />
                    <input type="password" name="confirmPassword"  placeholder='Confirm Password' />
                    <button type='submit'>Sign Up</button>
                    <p>Already registered? <span onClick={()=>navigate('/logIn')}>Log In</span></p>
                </form>
                <div className='mt-3'>
                    or
                    <button className='google-login' onClick={()=>signInWithGoogle()}>Log In with google</button>
                    <p className='text-center mt-2 text-danger'>{errMessage}</p>
                </div>
            </div>
        </div>
    );
};

export default Register;
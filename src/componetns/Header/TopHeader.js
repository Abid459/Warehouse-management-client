import { faBoxOpen, faEnvelope, faHome, faHomeUser, faHouse, faIcons, faUser, faWarehouse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import './Header.css'
import auth from '../../firebase.init';

const TopHeader = () => {
    const navigate = useNavigate()
    const [user, loading, error] = useAuthState(auth);
    console.log("user from header", user)

    const signUp = <div>
        <button onClick={()=>navigate('/logIn')}>Sign in</button>
        <button onClick={()=>navigate('/signUp')}>Sign up</button>
    </div>

    return (
        <div className='top-header'>
            <nav className='nav-bar'>
                <Link to={'/'}> <FontAwesomeIcon className='faIcon1' icon={faWarehouse}></FontAwesomeIcon> </Link>
                <Link to={'/inventory'}> <FontAwesomeIcon className='faIcon1' icon={faBoxOpen}></FontAwesomeIcon> </Link>
                <Link to={'/myProducts'}> <FontAwesomeIcon className='faIcon1' icon={faHome}></FontAwesomeIcon> </Link>
                <Link to={'/logIn'}> <FontAwesomeIcon className='faIcon1' icon={faHome}></FontAwesomeIcon> </Link>
            </nav>

            <div>
               {   
                   user? user?.photoURL ? <img className='user-photo' src={user?.photoURL} alt="" />: <FontAwesomeIcon icon={faUser}></FontAwesomeIcon> : signUp
               } 
            </div>

            {/* <button onClick={() = signOut(auth)}>Log Out</button> */}

            {/* <FontAwesomeIcon className='faIcon faEnvelop' icon={faEnvelope}></FontAwesomeIcon> */}
        </div>
    );
};

export default TopHeader;
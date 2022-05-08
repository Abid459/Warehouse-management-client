import { faBoxOpen, faEnvelope, faHome, faHomeUser, faHouse, faIcons, faPeopleCarryBox, faPerson, faPersonChalkboard, faUser, faWarehouse } from '@fortawesome/free-solid-svg-icons';
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
    const signUp = <div className='d-flex align-content-baseline me-5'>
        <button onClick={()=>navigate('/logIn')}>Sign in</button>
        <div className='vr'></div>
        <button onClick={()=>navigate('/signUp')}>Sign up</button>
    </div>

    return (
        <div className='top-header'>
            <div className="brand">
                <img src="./images/logo.png" alt="" />
            </div>
            <nav className='nav-bar'>
                <Link to={'/'}> <FontAwesomeIcon className='faIcon1' icon={faWarehouse}></FontAwesomeIcon> </Link>
                <Link to={'/inventory'}> <FontAwesomeIcon className='faIcon1' icon={faBoxOpen}></FontAwesomeIcon> </Link>
                <Link to={'/myProducts'}> <FontAwesomeIcon className='faIcon1' icon={faPersonChalkboard}></FontAwesomeIcon> </Link>
                {/* <Link to={'/logIn'}> <FontAwesomeIcon className='faIcon1' icon={faHome}></FontAwesomeIcon> </Link> */}
            </nav>

            <div>
               {   
                   user? user?.photoURL ?<div className='d-flex align-items-center'> <img className='user-photo' src={user?.photoURL} alt="" /> <div className='vr'></div> <button onClick={() => signOut(auth)} className='log-out'>Log Out</button></div>: <FontAwesomeIcon icon={faUser}></FontAwesomeIcon> : signUp
               } 
            </div>

            

            {/* <FontAwesomeIcon className='faIcon faEnvelop' icon={faEnvelope}></FontAwesomeIcon> */}
        </div>
    );
};

export default TopHeader;
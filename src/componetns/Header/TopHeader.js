import { faBoxOpen, faEnvelope, faHome, faHomeUser, faHouse, faIcons, faWarehouse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const TopHeader = () => {
    return (
        <div className='top-header'>
            <nav>
                <Link to ={'/'}> <FontAwesomeIcon className='faIcon1' icon={faWarehouse}></FontAwesomeIcon> </Link>
                <Link to ={'/inventory'}> <FontAwesomeIcon className='faIcon1' icon={faBoxOpen}></FontAwesomeIcon> </Link>
                <Link to ={'/singleItem'}> <FontAwesomeIcon className='faIcon1' icon={faHome}></FontAwesomeIcon> </Link>
                <Link to ={'/myItem'}> <FontAwesomeIcon className='faIcon1' icon={faHome}></FontAwesomeIcon> </Link>
            </nav>
        {/* <FontAwesomeIcon className='faIcon faEnvelop' icon={faEnvelope }></FontAwesomeIcon>             */}
        </div>
    );
};

export default TopHeader;
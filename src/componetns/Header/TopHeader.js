import { faEnvelope, faIcons } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const TopHeader = () => {
    return (
        <div className='top-header bg-secondary'>
        <FontAwesomeIcon className='faIcon faEnvelop' icon={faEnvelope }></FontAwesomeIcon>            
        </div>
    );
};

export default TopHeader;
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Footer = () => {
    return (
        <footer className=''>
            <div className="wrapper">
                <div className='footer-info'>
                    <h5> <span className='text-muted'>AiO</span> is an inventory management website</h5>
                    <p>This website is under development </p>
                </div>
                <dvi className='text-start'>
                    <h5 className='mb-3'>Contact developer</h5>
                    <div className='footer-contact-info'>
                    <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon><p>abid45986@gmail.com</p>
                    </div>
                    <div className='footer-contact-info'>
                    <FontAwesomeIcon icon={faWhatsapp} />
                    <p>01765760534</p>
                    </div>

                </dvi>
            </div>
            <p>©All Rights Reserved @Abid</p>
        </footer>
    );
};

export default Footer;
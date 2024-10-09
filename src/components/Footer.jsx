import React from 'react';
import {FaTwitter} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import {FaFacebook} from 'react-icons/fa';

const Footer = () => {
    return (
        <footer style={{ marginTop: 'auto', padding: '20px', boxSizing: 'border-box', backgroundColor: 'black', color: 'white', textAlign: 'center' }}>
            <p>&copy; 2024 NewsWebsite. All rights reserved.</p>
            <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'center', gap: '10px', padding: '0' }}>
                <li><a style={{ color: '#1DA1F2' }} href="#"><FaTwitter></FaTwitter></a></li>
                <li><a style={{ color: '#4267B2' }} href="#"><FaFacebook></FaFacebook></a></li>
                <li><a style={{ color: '#E1306C' }} href="#"><FaInstagram></FaInstagram></a></li>
            </ul>
        </footer>
    );
}

export default Footer;

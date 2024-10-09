import React, { useState } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import Hamburger from 'hamburger-react'

const Header = () => {
    const [isOpen, setOpen] = useState(false)
    return (
        <header>
            <div className="logo">
                <Link to="/" className='logo-link'>NewsWebsite</Link>
            </div>
            <nav>
                <ul className='nav' style={{ display: isOpen ? 'flex' : 'none', mediaQuery:{ minWidth: '600px', display: 'flex'}}}>
                    <li><Link to="/" className='home' onClick={() => setOpen(false)}>Home</Link></li>
                    <li><Link to="/category/BBC-News" className='politics' onClick={() => setOpen(false)}>Politics</Link></li>
                    <li><Link to="/category/CNN" className='sports' onClick={() => setOpen(false)}>Sports</Link></li>
                    <li><Link to="/category/Business-Insider" className='technology' onClick={() => setOpen(false)}>Technology</Link></li>
                </ul>
                <ul className='navBar'>
                    <li><Link to="/" className='home'>Home</Link></li>
                    <li><Link to="/category/BBC-News" className='politics'>Politics</Link></li>
                    <li><Link to="/category/CNN" className='sports'>Sports</Link></li>
                    <li><Link to="/category/Business-Insider" className='technology'>Technology</Link></li>
                </ul>
            </nav>
            <div className="search-bar">
                <input className='search-input' type="text" placeholder="Search news..." />
            </div>
            <span className="hamburger">
            <Hamburger toggled={isOpen} toggle={setOpen} />
            </span>
        </header>
    );
}

export default Header;

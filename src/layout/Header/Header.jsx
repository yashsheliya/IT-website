import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../../assets/images/logo/Logo.png';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { AiOutlineMenu } from "react-icons/ai";

import MobileMenu from './MobileMenu';
import Contact_Modal from './Contact_Modal';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [contact_ModalOpen, setcontact_ModalOpen] = useState(false);
    const location = useLocation(); // Get the current path

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    const contact_Modal = () => {
        setcontact_ModalOpen(!contact_ModalOpen);
    };

    const close_contact_Modal = () => {
        setcontact_ModalOpen(false);
    };

    // Function to check if the current path matches the link
    const isActive = (path) => {
        return location.pathname === path ? 'active' : '';
    };

    // Function to check if the current path is within a given path (used for parent menu items)
    const isParentActive = (path) => {
        return location.pathname.startsWith(path) ? 'active' : '';
    };

    return (
        <>
            <MobileMenu open={menuOpen} onClose={closeMenu} />
            <Contact_Modal open={contact_ModalOpen} onClose={close_contact_Modal} />

            <header className="header">
                <div className='header-area'>
                    <div className='header-top-wrap'>
                        <div className='container'>
                            <p className='header-top-message'>
                                <a href="#">Now Hiring:</a> Apply online not just for a “job”, but for a more exciting “career”.
                            </p>
                        </div>
                    </div>
                    <div className='header-bottom-wrap'>
                        <div className="container">
                            <div className='header__wrap'>
                                <div className="header__logo">
                                    <Link to="/"><img src={Logo} alt="" /></Link>
                                </div>
                                <div className='rs-menu-area'>
                                    <nav className='header__nav'>
                                        <ul className="header__nav-list">
                                            <li className={`header__nav-item ${isActive('/')}`}>
                                                <Link to="/">Home</Link>
                                            </li>
                                            <li className={`header__nav-item ${isActive('/about')}`}>
                                                <Link to="/about">About</Link>
                                            </li>
                                            <li className={`header__nav-item ${isParentActive('/services')}`}>
                                                <Link to="/services">Services <KeyboardArrowDownIcon className='DownIcon' /></Link>
                                                <ul className='sub-menu'>
                                                    <li className={`menu-item ${isActive('/services/web-development')}`}><Link to="/services/web-development">Web Development</Link></li>
                                                    <li className={`menu-item ${isActive('/services/ecommerce')}`}><Link to="/services/ecommerce">E-commerce Site Development</Link></li>
                                                    <li className={`menu-item ${isActive('/services/prototyping')}`}><Link to="/services/prototyping">Product Prototyping Services</Link></li>
                                                    <li className={`menu-item ${isActive('/services/graphic-design')}`}><Link to="/services/graphic-design">Graphic Design Services</Link></li>
                                                    <li className={`menu-item ${isActive('/services/seo')}`}><Link to="/services/seo">SEO Services</Link></li>
                                                </ul>
                                            </li>
                                            <li className={`header__nav-item ${isActive('/portfolio')}`}>
                                                <Link to="/portfolio">Portfolio</Link>
                                            </li>
                                            <li className={`header__nav-item ${isActive('/blog')}`}>
                                                <Link to="/blog">Blog</Link>
                                            </li>
                                            <li className={`header__nav-item ${isActive('/company')}`}>
                                                <Link to="/company">Company</Link>
                                            </li>
                                            <li className={`header__nav-item ${isActive('/contact')}`}>
                                                <Link to="/contact">Contact</Link>
                                            </li>
                                        </ul>
                                    </nav>
                                    <div className='humburger' onClick={contact_Modal}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
                                            <rect width="5" height="5" fill="currentColor"></rect>
                                            <rect y="12" width="5" height="5" fill="currentColor"></rect>
                                            <rect y="24" width="5" height="5" fill="currentColor"></rect>
                                            <rect x="12" width="5" height="5" fill="currentColor"></rect>
                                            <rect x="12" y="12" width="5" height="5" fill="currentColor"></rect>
                                            <rect x="12" y="24" width="5" height="5" fill="currentColor"></rect>
                                            <rect x="24" width="5" height="5" fill="currentColor"></rect>
                                            <rect x="24" y="12" width="5" height="5" fill="currentColor"></rect>
                                            <rect x="24" y="24" width="5" height="5" fill="currentColor"></rect>
                                        </svg>
                                    </div>
                                </div>
                                <button className="header__toggle" onClick={toggleMenu} aria-label="Toggle Menu">
                                    <div className='mobile-navigation-icon'>
                                        <AiOutlineMenu />
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;

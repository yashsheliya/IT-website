import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo/Logo.png'

const MobileMenu = ({ open, onClose }) => {
    const [subMenuOpen, setSubMenuOpen] = useState(false);

    const toggleSubMenu = () => {
        setSubMenuOpen(!subMenuOpen);
    };
    return (
        <Drawer
            anchor="right"
            open={open}
            onClose={onClose}
            className='mobile-menu-wrapper'
        >
            <div className="mobile-menu">
                <div className="mobile-menu__header">
                    <div className='mobile-menu__Logo'>
                        <Link><img src={Logo} alt="" /></Link>
                    </div>
                    <div onClick={onClose} className="mobile-menu__close">
                        <CloseIcon />
                    </div>
                </div>
                <div className="mobile-menu__body">
                    <ul className="mobile-menu__list">
                        <li><a href="#home" onClick={onClose}>Home</a></li>
                        <li><a href="#about" onClick={onClose}>About</a></li>
                        <li>
                            <a href="#services" onClick={onClose}>Services</a>
                            <div className="DownIcon" onClick={toggleSubMenu}>
                                {subMenuOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                            </div>
                            {subMenuOpen && (
                                <ul className='sub-menu__list'>
                                    <li><a href="" onClick={onClose}>Web Development</a></li>
                                    <li><a href="" onClick={onClose}>E-commerce Site Development</a></li>
                                    <li><a href="" onClick={onClose}>Product Prototyping Services</a></li>
                                    <li><a href="" onClick={onClose}>Graphic Design Services</a></li>
                                    <li><a href="" onClick={onClose}>SEO Services</a></li>
                                </ul>
                            )}
                        </li>
                        <li><a href="#contact" onClick={onClose}>Portfolio</a></li>
                        <li><a href="#contact" onClick={onClose}>Blog</a></li>
                        <li><a href="#contact" onClick={onClose}>Company</a></li>
                        <li><a href="#contact" onClick={onClose}>Contact</a></li>

                    </ul>
                </div>
            </div>
        </Drawer>
    );
};

export default MobileMenu;

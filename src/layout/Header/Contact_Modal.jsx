import React from 'react'
import Drawer from '@mui/material/Drawer';
import { Link } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import Logo from '../../assets/images/logo/Logo.png'
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { RiMapPinFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa6";

const Contact_Modal = ({ open, onClose }) => {
    return (
        <>
            <Drawer
                anchor="right"
                open={open}
                onClose={onClose}
                className='Contact_Modal_wrapper'
            >
                <div className='Contact_Modal'>
                    <div className="Contact_Modal__header">
                        <div className='Contact_Modal__Logo'>
                            <Link><img src={Logo} alt="" /></Link>
                        </div>
                        <div onClick={onClose} className="Contact_Modal__close">
                            <CloseIcon />
                        </div>
                    </div>
                    <div className='Contact_Modal__body'>
                        <div className='Contact_Modal-info'>
                            <div className='Contact_Modal-info-card'>
                                <div className='Contact_Modal-info-card-icon'>
                                    <MdEmail />
                                </div>
                                <h5 className='Contact_Modal-info-title'>Email Us</h5>
                                <div className='Contact_Modal-info-description'>
                                    <Link to='mailto:hr@morenainfotech.com'>hr@morenainfotech.com</Link>
                                </div>
                            </div>
                            <div className='Contact_Modal-info-card'>
                                <div className='Contact_Modal-info-card-icon'>
                                    <FaPhoneAlt />
                                </div>
                                <h5 className='Contact_Modal-info-title'>Call Us</h5>
                                <div className='Contact_Modal-info-description'>
                                    <Link to='tel:9537566009'>+ 91 95375 66009</Link>
                                </div>
                            </div>
                            <div className='Contact_Modal-info-card'>
                                <div className='Contact_Modal-info-card-icon'>
                                    <RiMapPinFill />
                                </div>
                                <h5 className='Contact_Modal-info-title'>Address</h5>
                                <div className='Contact_Modal-info-description'>
                                    <Link to='https://maps.app.goo.gl/ncbGHPAKUAnLW4Rc9'> Six Floor, 606, Kyros business center, Ashirwad Society, Sarthana Jakatnaka Surat, Gujarat 395013</Link>
                                </div>
                            </div>
                            <div className='Contact_Modal-info-card'>
                                <div className='Contact_Modal-info-card-icon'>
                                    <FaLinkedinIn />
                                </div>
                                <h5 className='Contact_Modal-info-title'>Linkedin Profile</h5>
                                <div className='Contact_Modal-info-description'>
                                    <Link to='/'>Morena infotech</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Drawer>
        </>
    )
}

export default Contact_Modal

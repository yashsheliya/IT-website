import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import slide_1_Img from '../../../assets/images/home/heroslider/website-development.png'
import slide_2_Img from '../../../assets/images/home/heroslider/e-commerce-development.png'
import slide_3_Img from '../../../assets/images/home/heroslider/search-engine-optimization.png'
import slide_4_Img from '../../../assets/images/home/heroslider/Quality-Assurance-banner.png'
import ShapeAnimation from '../../../components/shapeAnimation/ShapeAnimation';


const HeroSlider = () => {

    return (
        <>
            <section id='hero'>
                <div className='infotechno-hero'>
                    <ShapeAnimation />
                    <Swiper
                        spaceBetween={0}
                        loop={true}
                        centeredSlides={true}
                        autoplay={{
                            enabled: true,
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        effect="fade"
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, EffectFade, Pagination, Navigation]}
                        className="hero-mySwiper"
                    >
                        <SwiperSlide>
                            <div className='row hero-mySwiper-slider-items'>
                                <div className='col-sm-6'>
                                    <div className='infotechno-hero-text'>
                                        <h6>Spread your idea around the world</h6>
                                        <h2 className='title'>Website<br /> Development</h2>
                                        <p>Quick, reliable, secure, quality and mobile friendly web development center for any kind of responsive website and web design requirements.</p>
                                    </div>
                                </div>
                                <div className='col-sm-6'>
                                    <div className='infotechno-hero-inner-images'>
                                        <img src={slide_1_Img} alt="Website Development" />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className='row hero-mySwiper-slider-items'>
                                <div className='col-sm-6'>
                                    <div className='infotechno-hero-text'>
                                        <h6>Solutions to give your business online</h6>
                                        <h2 className='title'>E-Commerce<br /> Development</h2>
                                        <p> Build eCommerce website on Magento, Prestashop, OpenCart, osCart, Zen Cart, WooCommerce or using custom framework for quick development.</p>
                                    </div>
                                </div>
                                <div className='col-sm-6'>
                                    <div className='infotechno-hero-inner-images'>
                                        <img src={slide_2_Img} alt="Website Development" />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className='row hero-mySwiper-slider-items'>
                                <div className='col-sm-6'>
                                    <div className='infotechno-hero-text'>
                                        <h6> Get visibility on organic search and genuine traffic</h6>
                                        <h2 className='title'>Search Engine<br /> Optimization</h2>
                                        <p> Belong at top and scale new heights with our smart Internet marketing techniques.</p>
                                    </div>
                                </div>
                                <div className='col-sm-6'>
                                    <div className='infotechno-hero-inner-images'>
                                        <img src={slide_3_Img} alt="Website Development" />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className='row hero-mySwiper-slider-items'>
                                <div className='col-sm-6'>
                                    <div className='infotechno-hero-text'>
                                        <h6> WeeTech Performs in a well structured method for quality
                                            assurance</h6>
                                        <h2 className='title'>Quality Assurance<br /> & Testing</h2>
                                        <p>Functionality, Usability, Maintainability, Reliability, Efficiency, Portability</p>
                                    </div>
                                </div>
                                <div className='col-sm-6'>
                                    <div className='infotechno-hero-inner-images'>
                                        <img src={slide_4_Img} alt="Quality Assurance & Testing" />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
        </>
    )
}

export default HeroSlider

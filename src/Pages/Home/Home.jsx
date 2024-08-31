import React from 'react';
import HeroSlider from './heroSlider/HeroSlider';
import OurServices from './ourServices/OurServices';

const Home = () => {
    return (
        <>
        <main id='main' className='site-main'>
            <HeroSlider />
            <OurServices />
        </main>
        </>
    );
};

export default Home;

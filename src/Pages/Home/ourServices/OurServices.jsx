import React from 'react'
import SectionTitle from '../../../components/sectionTtitle/SectionTtitle'

const OurServices = () => {
    return (
        <>
            <section id='our-services' className='our-services section-space--ptb_100' >
                <div className='our-services-wrapper'>
                    <div className='container'>
                        <div className="row">
                            <div className="col-lg-12">
                                <SectionTitle
                                    subTitle="Our services"
                                    title={`We are committed to serve you the <br> <span class="text-color-primary">best quality within time.</span>`}
                                    titleColors={['text-color-secondary', 'text-color-primary']}
                                    subTitleColor='text-color-subtitle'
                                    textAlign='text-center'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default OurServices

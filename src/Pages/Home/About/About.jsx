import React from 'react';
import image from '../../../assets/background green.jpg'
import Heading from '../Components/Heading/Heading';
import Marquee from 'react-fast-marquee';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

AOS.init();

const About = () => {
    return (
       <>
            <Helmet>
                <title>Protfolio - About</title>
            </Helmet>
        <div className='my-12 overflow-hidden'>
          <Heading heading={'About Me'}></Heading>
           <div className="hero">
            <div className="hero-content flex-col lg:flex-row">
              <img data-aos="fade-right" src={image} className="max-w-sm rounded-lg shadow-2xl lg:mr-8"/>
              <div data-aos="fade-left">
                <Marquee className='overflow-hidden'>
                <h1 className="text-2xl ml-20 lg:ml-0 lg:text-3xl font-medium uppercase">My name is <span className='text-orange-400'>dewan mehedi hasan</span></h1>
                </Marquee>
                <h2 className='text-xl lg:text-2xl font-light'>From Dhaka,Bangladesh.</h2>
                <p className="py-6">Enthusiastic web developer eager to kick-start my career in the field. Passionate about coding and creating user-friendly websites. 
                 to continuous learning and staying up-to-date with the latest industry trends. </p>
                <button className="btn btn-outline btn-neutral">
                  <Link to='/skills'>Get Started</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
       </>
    );
};

export default About;
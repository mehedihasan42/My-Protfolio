import React from 'react';
import image from '../../../assets/background green.jpg'
import Heading from '../Components/Heading/Heading';

const About = () => {
    return (
        <div>
          <Heading heading={'About Me'}></Heading>
           <div className="hero">
            <div className="hero-content flex-col lg:flex-row">
              <img src={image} className="max-w-sm rounded-lg shadow-2xl lg:mr-8" />
              <div>
                <h1 className="text-3xl font-medium uppercase">My name is <span className='text-orange-400'>dewan mehedi hasan</span></h1>
                <h2 className='text-2xl font-light'>From Dhaka,Bangladesh.</h2>
                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>
        </div>
    );
};

export default About;
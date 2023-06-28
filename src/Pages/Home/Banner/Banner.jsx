import React from 'react';
import img from '../../../assets/my picture.jpg'
import { useTypewriter } from 'react-simple-typewriter';

const Banner = () => {
    const [text] = useTypewriter({
        words: ['FRONT-END DEVELOPER', 'REACT DEVELOPER', 'MERN STACK DEVELOPER'],
        loop: true,
        typeSpeed:'20',
        deleteSpeed:40,
        delaySpeed:1500,
      })
    return (
        <div className="hero w-full bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
         <div> <img src={img} className="max-w-sm rounded-lg shadow-2xl" /></div>
          <div className=''>
            <h2 data-aos="zoom-out-left" className='text-5xl'>Hello</h2>
            <h1 className="text-5xl font-bold">I AM {' '}
            <span className='text-orange-400'>{text}</span>
            </h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
        </div>
      </div>
    );
};

export default Banner;
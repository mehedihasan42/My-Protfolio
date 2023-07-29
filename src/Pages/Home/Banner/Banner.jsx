import React from 'react';
import img from '../../../assets/web developer.jpg';
import myResume from '../../../assets/DEWAN MEHEDI HASAN.pdf';
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
        <div className="hero lg:w-full bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
         <div> <img src={img} className="max-w-xs lg:max-w-sm rounded-lg shadow-2xl lg:h-96" /></div>
          <div className=''>
            <h2 data-aos="zoom-out-left" className='text-2xl lg:text-5xl'>Hello</h2>
            <h1 className="text-2xl lg:text-5xl font-bold">I AM {' '}
            <span className='text-orange-400'>{text}</span>
            </h1>
            <p className="py-6">Web Development is my passion.I can learn quickly and enjoy coming up with new ideas.
           {"I'm"} excited to use my technical skills, adaptability, and dedication to excel in web development and make a big impact.
            </p>
           <button className='btn btn-outline btn-neutral'>
           <a href={myResume} target="_blank" rel="noopener noreferrer" download='Resume of DEWAN MEHEDI HASAN'>
           Download RESUME
          </a>
           </button>
          </div>
        </div>
      </div>
    );
};

export default Banner;
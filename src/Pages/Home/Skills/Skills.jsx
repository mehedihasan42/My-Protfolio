import React from 'react';
import Heading from '../Components/Heading/Heading';
import 'react-circular-progressbar/dist/styles.css';
import FirstColums from './FirstColums';
import SecoundColums from './SecoundColums';

const Skills = () => {
    return (
        <>
            <Heading heading={'My skills'}></Heading>
           <div className='lg:ml-96 lg:pl-28'>
           <FirstColums></FirstColums>
           <SecoundColums></SecoundColums>
           </div>
        </>
    );
};

export default Skills;
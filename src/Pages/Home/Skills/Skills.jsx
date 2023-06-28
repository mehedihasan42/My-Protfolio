import React from 'react';
import Heading from '../Components/Heading/Heading';
import 'react-circular-progressbar/dist/styles.css';
import FirstColums from './FirstColums';
import SecoundColums from './SecoundColums';
import Tools from '../Tools/Tools';

const Skills = () => {
    return (
        <div className='bg-neutral-200 py-20'>
            <Heading heading={'My skills'}></Heading>
           <div className=''>
           <FirstColums></FirstColums>
           <SecoundColums></SecoundColums>
           <Tools></Tools>
           </div>
        </div>
    );
};

export default Skills;
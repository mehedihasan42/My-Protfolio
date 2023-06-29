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
          <div className="flex lg:grid grid-cold-2">
          <FirstColums></FirstColums>
           <SecoundColums></SecoundColums>
          </div>
           <Tools></Tools>
           </div>
    );
};

export default Skills;
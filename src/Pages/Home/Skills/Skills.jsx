import React from 'react';
import Heading from '../Components/Heading/Heading';
import 'react-circular-progressbar/dist/styles.css';
import FirstColums from './FirstColums';
import SecoundColums from './SecoundColums';
import Tools from '../Tools/Tools';
import { Helmet } from 'react-helmet';

const Skills = () => {
    return (
        <>
            <Helmet>
                <title>Protfolio - Skills</title>
            </Helmet>
            <div className='bg-neutral-200 py-20'>
                <Heading heading={'My skills'}></Heading>
                <div className="flex justify-center lg:grid">
                    <FirstColums></FirstColums>
                    <SecoundColums></SecoundColums>
                </div>
                <Tools></Tools>
            </div>
        </>
    );
};

export default Skills;
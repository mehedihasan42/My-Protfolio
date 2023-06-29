import React from 'react';

const Heading = ({heading}) => {
    return (
        <div>
            <div className="divider w-24 bg-orange-300 h-px mx-auto mt-12"></div>
            <h2 className='text-2xl lg:text-4xl text-center font-bold uppercase '>{heading}</h2>
            <div className="divider w-48 lg:w-80 bg-orange-300 h-px mx-auto mb-8"></div>
        </div>
    );
};

export default Heading;
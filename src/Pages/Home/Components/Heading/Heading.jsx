import React from 'react';

const Heading = ({heading}) => {
    return (
        <div>
            <h2 className='text-4xl text-center font-bold uppercase'>{heading}</h2>
        </div>
    );
};

export default Heading;
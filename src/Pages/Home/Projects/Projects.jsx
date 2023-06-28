import React, { useEffect, useState } from 'react';
import Heading from '../Components/Heading/Heading';

const Projects = () => {
    const [cards, setCard] = useState([])
    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setCard(data))
    }, [])
    return (
        <div className='bg-base-200 py-12'>
            <Heading heading={'My Project'}></Heading>
            <div className='flex space-x-10 ml-32'>
                {
                    cards.map(card =>
                        <div key={card.id} className="card card-compact w-96 bg-base-100 shadow-xl">
                            <figure><img src={card.image} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{card.project_name}</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Projects;
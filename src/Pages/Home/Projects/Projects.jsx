import React, { useEffect, useState } from 'react';
import Heading from '../Components/Heading/Heading';
// import { Link } from 'react-router-dom';

const Projects = () => {
    const [cards, setCard] = useState([])
    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setCard(data))
    }, [])

    const handleLiveButtonClick = (link) => {
        window.open(link, '_blank');
    };
    return (
        <div className='bg-base-200 py-12'>
            <Heading heading={'My Project'}></Heading>
            <div className='flex space-x-10 ml-32'>
                {
                    cards.map(card =>
                        <div data-aos="flip-up"
                         key={card.id} className="card card-compact w-96 bg-base-100 shadow-xl hover:w-[400px]">
                            <figure><img src={card.image} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{card.project_name}</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions justify-end">
                                      <button className="btn btn-primary" onClick={() => handleLiveButtonClick(card.link)}>
                                    Live
                                </button>
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
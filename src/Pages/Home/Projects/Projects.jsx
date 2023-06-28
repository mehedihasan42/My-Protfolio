import React, { useEffect, useState } from 'react';
import Heading from '../Components/Heading/Heading';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { CiShare1 } from "react-icons/ci";

AOS.init({duration: 500});

const Projects = () => {
    const [cards, setCard] = useState([])
    useEffect(() => {
        AOS.refresh()
        fetch('fakeData.json')
        .then(res => res.json())
        .then(data => setCard(data))
       
    }, [])

    const handleLiveButtonClick = (link) => {
        window.open(link, '_blank');
    };
    return (
        <div className='bg-base-200 py-12'>
            <Heading heading={'My popular Project'}></Heading>
            <div className='flex space-x-10 ml-32'>
                {
                    cards.map(card =>
                        <div data-aos="fade-up-left"
                         key={card.id} className="card card-compact w-96 bg-base-100 shadow-xl">
                            <figure><img src={card.image} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{card.project_name}</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions justify-end">
                                      <button className="btn btn-outline btn-neutral" onClick={() => handleLiveButtonClick(card.link)}>
                                    <CiShare1 className='text-2xl font-bold'/>
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
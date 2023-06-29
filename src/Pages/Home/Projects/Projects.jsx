import React, { useEffect, useState } from 'react';
import Heading from '../Components/Heading/Heading';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { CiShare1 } from "react-icons/ci";
import { Helmet } from 'react-helmet';

AOS.init({duration: 500});

const Projects = () => {
    const [cards, setCard] = useState([])
    useEffect(() => {
        AOS.refresh()
        fetch('http://localhost:5000/projects')
        .then(res => res.json())
        .then(data => setCard(data))
       
    }, [])

    const handleLiveButtonClick = (link) => {
        window.open(link, '_blank');
    };
    return (
        <div className='bg-base-200 py-12'>
             <Helmet>
                <title>Protfolio - Project</title>
            </Helmet>
            <Heading heading={'My popular Project'}></Heading>
            <div className='lg:flex justify-center lg:space-x-10 space-y-5'>
                {
                    cards.map(card =>
                        <div data-aos="fade-up-left"
                         key={card.id} className="card card-compact w-80  mx-auto lg:mx-0 lg:w-96 bg-base-100 shadow-xl">
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
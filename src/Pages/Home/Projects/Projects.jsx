import React, { useEffect, useState } from 'react';
import Heading from '../Components/Heading/Heading';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { CiShare1 } from "react-icons/ci";
import { Helmet } from 'react-helmet';
import { IoIosArrowDropupCircle,IoIosArrowDropdownCircle } from "react-icons/io";

AOS.init();

const Projects = () => {
    const [cards, setCard] = useState([])
    useEffect(() => {
        AOS.refresh()
        fetch('https://my-protfolio-server-beta.vercel.app/projects')
        .then(res => res.json())
        .then(data => setCard(data))
       
    }, [])

    const handleLiveButtonClick = (link) => {
        window.open(link, '_blank');
    };

    const [activeAccordion, setActiveAccordion] = useState(null);

  const handleAccordionToggle = (cardId) => {
    setActiveAccordion(activeAccordion === cardId ? null : cardId);
  };

    return (
        <div className='bg-base-200 py-12'>
             <Helmet>
                <title>Protfolio - Project</title>
            </Helmet>
            <Heading heading={'My popular Projects'}></Heading>
            <div className='lg:flex justify-center lg:space-x-10 space-y-5'>
                {
                    cards.map(card =>
                        <div data-aos="fade-up-left"
                         key={card.id} className="card card-compact w-80 mx-auto lg:mx-0 lg:w-96 bg-base-100 shadow-xl">
                            <figure><img src={card.image} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{card.project_name}</h2>
                             {/* ----Accordion */}
                             <div className="collapse bg-base-200">
                <input
                  type="radio"
                  name={`my-accordion-${card.id}`}
                  checked={activeAccordion === card.id}
                  onChange={() => handleAccordionToggle(card.id)}
                />
                <div
                  className="collapse-title text-xl font-medium"
                  onClick={() => handleAccordionToggle(card.id)}
                >
                  See Features {activeAccordion === card.id ? <IoIosArrowDropupCircle/> : <IoIosArrowDropdownCircle/>}
                </div>
                {activeAccordion === card.id && (
                  <div className="collapse-content">
                    <p>1. {card.feature1}</p>
                    <p>2. {card.feature2}</p>
                    <p>3. {card.feature3}</p>
                  </div>
                )}
              </div>
                             {/* ----------- */}
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
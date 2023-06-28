import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import Tools from '../Tools/Tools';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Skills></Skills>
            <Tools></Tools>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;
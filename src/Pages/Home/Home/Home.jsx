import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import { Helmet } from 'react-helmet';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <>
          <Helmet>
                <title>Protfolio - Home</title>
            </Helmet>
          </>
        </div>
    );
};

export default Home;
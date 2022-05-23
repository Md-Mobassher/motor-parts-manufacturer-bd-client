import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import GetQuote from './GetQuote';
import Recommended from './Recommended';
import Reviews from './Reviews';
import Tools from './Tools';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Tools></Tools>
            <BusinessSummary></BusinessSummary>
            <Reviews></Reviews>
            <Recommended></Recommended>
            <GetQuote></GetQuote>
        </>
    );
};

export default Home;
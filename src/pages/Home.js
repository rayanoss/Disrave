import React from 'react';
import Header from '../components/Header/Header';
import Step from '../components/section/Step';
import Features from '../components/section/Features';
import HomeReview from '../components/section/HomeReview';

const Home = () => {
    return (
        <>
            <Header/>
            <Features />
            <Step />
            <HomeReview />
        </>
    );
};

export default Home;
import React from 'react';
import Header from '../components/Header/Header';
import Choice from '../components/section/Choice';
import Features from '../components/section/Features';
import HomeReview from '../components/section/HomeReview';

const Home = () => {
    return (
        <>
            <Header/>
            <Features />
            <Choice />
            <HomeReview />
        </>
    );
};

export default Home;
import React from 'react';
import Banner from '../Banner/Banner';
import WorkSection from '../Work/WorkSection/WorkSection';
import Service from '../Services/Service/Service';
import Services from '../Services/Services/Services';
import Sales from '../Sales/Sales';
import ShowCase from '../showCase/ShowCase';
import Merchant from '../Merchant/Merchant';

const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <WorkSection></WorkSection>
            <Services></Services>
            <Sales></Sales>
            <ShowCase></ShowCase>
            <Merchant></Merchant>

        </div>
    );
};

export default Home;
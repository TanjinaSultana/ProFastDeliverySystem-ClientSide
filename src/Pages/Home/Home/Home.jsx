import React from 'react';
import Banner from '../Banner/Banner';
import WorkSection from '../Work/WorkSection/WorkSection';
import Service from '../Services/Service/Service';
import Services from '../Services/Services/Services';

const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <WorkSection></WorkSection>
            <Services></Services>
        </div>
    );
};

export default Home;
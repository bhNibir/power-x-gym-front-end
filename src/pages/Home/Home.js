import React from 'react';
import MainBody from '../../components/MainBody/MainBody';
import Benefits from '../../components/Benefits/Benefits';
import AboutUs from '../../components/AboutUs/AboutUs';


const Home = () => {
    return (
        <div>
            <MainBody>
                <Benefits/>
                <AboutUs/>                
            </MainBody>
        </div>
    );
};

export default Home;
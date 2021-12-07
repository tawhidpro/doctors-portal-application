import React from 'react';
import BusinessInfo from './BusinessInfo/BusinessInfo';
import Featured from './Featured/Featured';
import Header from './Header/Header';
import MakeAppointment from './MakeAppointment/MakeAppointment';
import Services from './Services/Services';
import Testimonial from './Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Header/>
            <BusinessInfo/>
            <Services/>
            <Featured/>
            <MakeAppointment/>
            <Testimonial/>
        </div>
    );
};

export default Home;
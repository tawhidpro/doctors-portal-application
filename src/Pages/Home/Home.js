import React from 'react';
import BusinessInfo from './BusinessInfo/BusinessInfo';
import Featured from './Featured/Featured';
import Header from './Header/Header';
import MakeAppointment from './MakeAppointment/MakeAppointment';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Header/>
            <BusinessInfo/>
            <Services/>
            <Featured/>
            <MakeAppointment/>
        </div>
    );
};

export default Home;

import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Navber from '../../Home/Header/Navber';
import chair from '../../../images/chair.png'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const AppointmentHeader = ({handleDateChange,selectedDate}) => {
   
    return (
        <div className="header-container">
         <Navber/>
            <Container>
                <Row className="header-content d-flex align-items-center">
                <Col className="text-content mt-5"  sm={12} md={5}>
                    <h1 className="mt-5 mb-3">Appointment</h1>
                    <Calendar
                        onChange={handleDateChange}
                        // value={value}
                        value={selectedDate}
                        
                    />
                </Col>
                <Col sm={12} md={7}>
                    <img className="img-fluid" src={chair} alt="" />
                </Col>
            </Row>
        </Container>
        </div>
    );
};

export default AppointmentHeader;
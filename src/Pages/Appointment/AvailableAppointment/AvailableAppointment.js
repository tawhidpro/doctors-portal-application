
import React, { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import AppointmetForm from '../AppointmetForm/AppointmetForm';
import BookingCard from '../BookingCard/BookingCard';

const AvailableAppointment = ({date}) => {
    const availableBookingData = [
        {
            id: 1,
            subject: 'teeth orthodontics',
            time : '8:00 AM to 9.00 AM',
            totalSpace: 10
        },
        {
            id: 2,
            subject: 'cosmetic dentistry',
            time : '8:00 AM to 9.00 AM',
            totalSpace: 10
        },
        {
            id: 3,
            subject: 'teeth cleaning',
            time : '10:00 AM to 11.00 AM',
            totalSpace: 10
        },
        {
            id: 4,
            subject: 'cavity protection',
            time : '7:00 AM to 8.00 AM',
            totalSpace: 10
        },
        {
            id: 5,
            subject: 'teeth orthodontics',
            time : '8:00 AM to 9.00 AM',
            totalSpace: 10
        },
        {
            id: 6,
            subject: 'teeth orthodontics',
            time : '8:00 AM to 9.00 AM',
            totalSpace: 10
        }

]


    return (
        <Container>
            <Row className="mt-5">
                <h2 className="text-center theme-color">Available Appointment on {date.toDateString()} </h2>
                {
                    availableBookingData.map(booking => <BookingCard key={booking.id} date={date} booking={booking}/>)
                } 
            </Row>
        </Container>
    );
};

export default AvailableAppointment;
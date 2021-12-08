import React, { useState } from 'react';
import {Button, Col } from 'react-bootstrap';
import AppointmetForm from '../AppointmetForm/AppointmetForm';

const BookingCard = ({booking,date}) => {
    // modal related code 
        const [modalIsOpen, setIsOpen] =useState(false);
        function openModal() {
        setIsOpen(true);
        } 
        function closeModal() {
        setIsOpen(false);
        }

    return (
        <Col sm={6} md={4}>
            <div  className="booking-card  shadow mt-4 p-4 text-center">
                <h4 className="theme-color">{booking.subject}</h4>
                <h6>{booking.time}</h6>
                <p>{booking.totalSpace} Space Available</p>
                <Button onClick={openModal} className="call-to-action-btn">Book Appointment</Button>
                <AppointmetForm appointmentOn={booking.subject} date={date} closeModal={closeModal} modalIsOpen={modalIsOpen} />
            </div>
        </Col>
    );
};

export default BookingCard;
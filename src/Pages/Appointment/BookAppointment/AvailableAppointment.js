
import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

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
                    availableBookingData.map(item =>{
                        return <Col key={item.id} sm={6} md={4}>
                            <div  className="booking-card  shadow mt-4 p-4 text-center">
                                <h4 className="theme-color">{item.subject}</h4>
                                <h6>{item.time}</h6>
                                <p>{item.totalSpace} Space Available</p>
                                <Button className="call-to-action-btn">Book Appointment</Button>
                            </div>
                        </Col>
                    })
                }
            </Row>
        </Container>
    );
};

export default AvailableAppointment;
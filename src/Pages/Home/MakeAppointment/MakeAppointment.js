import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import './makeAppointment.css'
import doctor from '../../../images/doctor.png'

const MakeAppointment = () => {
    return (
       <div className="make-appointment">
            <Container>
                <Row>
                    <Col sm={12} md={4}>
                        <img className="doctor-img" src={doctor} alt="" />
                    </Col>
                    <Col sm={12} md={8} className="text-white appointment-info p-5">
                        <h2>Make an appointment <br/> today</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum molestias maiores, distinctio iure, nobis at id sequi eos quia, odio repellat consequatur illum quis debitis iusto illo voluptatem obcaecati hic sint error et nisi architecto sunt. Atque maiores delectus sed ad quos facilis, nesciunt alint, dolorum perferendis voluptatem? Aperiam, quaerat saepe nam eligendi possimus tempora est dolor rem voluptatum sint!</p>
                        <Button className="call-to-action-btn">Learn More</Button>
                    </Col>
                </Row>
            </Container>
       </div>
    );
};

export default MakeAppointment;
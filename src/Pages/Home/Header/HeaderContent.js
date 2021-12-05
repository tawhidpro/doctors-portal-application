import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import chair from '../../../images/chair.png'
import './header.css'

const HeaderContent = () => {
    return (
        <Container>
            <Row className="header-content d-flex align-items-center">
                <Col className="text-content" sm={12} md={5}>
                    <h1>Your New Smiles <br/>Start Here</h1>
                    <p className="mt-3">Lorem ipsum dolor sit amet <br/> consectetur adipisicing elit. Nobis, <br/> Lorem ipsum dolor sit amet. porro? </p>
                    <Button className="mt-3 call-to-action-btn" variant="dark">Get Appointment</Button>
                </Col>
                <Col sm={12} md={7}>
                    <img className="img-fluid" src={chair} alt="" />
                </Col>
            </Row>
        </Container>
    );
};

export default HeaderContent;
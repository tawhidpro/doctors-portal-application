import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import treatment from '../../../images/treatment.png'
import './Featured.css'

const Featured = () => {
    return (
        <Container>
            <Row className="mt-5">
                <Col sm={12} md={4} >
                    <img  className="img-fluid featured-img" src={treatment} alt="treatment" />
                </Col>
                <Col sm={12} md={8} className="featured-text-content p-2" >
                    <h2>Exceptional Dental <br/> Care on your terms</h2>
                    <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident tenetur eos ipsam aperiam, mollitia sunt. Vel earum ipsum, porro minima quibusdam neque error voluptas dolorem quo harum officiis sit accusamus facere doloribus debitis facilis recusandae sunt impedit reiciendis voluptatibus! Illo dolorem natus quasieum omnis dolore nisi dolorem blanditiis quasi molestiae harum delectus enim, soluta dolorum ea repellendus? Earum aut accusantium veniam animi eum provident omnis. Eligendi autem a tenetur libero natus.</p>
                    <Button size="lg" className="call-to-action-btn mt-3">Learn More</Button>
                </Col>
            </Row>
        </Container>
    );
};

export default Featured;
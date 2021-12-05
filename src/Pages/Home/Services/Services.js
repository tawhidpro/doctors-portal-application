import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import fluoride from '../../../images/fluoride.png'
import cavity from '../../../images/cavity.png'
import whitening from '../../../images/whitening.png'

const services = [
    {
        title: 'Fluoride Treatment',
        des: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta accusantium perferendis repellendus.',
        img: fluoride
    },
    {
        title: 'Cavity Filling',
        des: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta accusantium perferendis repellendus.',
        img: cavity
    },
    {
        title: 'Teath Whitening',
        des: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta accusantium perferendis repellendus.',
        img: whitening
    }
]

const Services = () => {
    return (
        <Container>
            <Row className="text-center">
                <h4 className="heading-title">Our Services</h4>
                <h2>Services We Provide</h2>
            </Row>
            <Row className="mt-5">
                {
                    services.map(item =>{
                        return <Col className="text-center" md={4} sm={12}>
                            <img className="m-2" src={item.img} alt="" />
                            <h4  className="m-2 ">{item.title}</h4>
                            <p className="m-2">{item.des}</p>
                        </Col>
                    })
                }
            </Row>
        </Container>
    );
};

export default Services;
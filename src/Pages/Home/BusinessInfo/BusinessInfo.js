import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const businessInfo = [
    {
        title: 'opening hours',
        des: 'lorem imsum lorem ipsum lorem ipsum',
        icon: '',
        background: 'dark'
    },
    {
        title: 'Visit Our Location',
        des: 'lorem imsum lorem ipsum lorem ipsum',
        icon: '',
        background: 'dark'
    },
    {
        title: 'Contact us Now',
        des: '+065665 89686',
        icon: '',
        background: 'dark'
    }
]

const BusinessInfo = () => {
    return (
        <div>
            <Container>
                <Row>
                    {
                        businessInfo.map(item=>{
                            return <Col md={4}>
                                <h4>{item.title}</h4>
                                <p>{item.des}</p>
                            </Col>
                        })
                    }
                </Row>
            </Container>
        </div>
    );
};

export default BusinessInfo;
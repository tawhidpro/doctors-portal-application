import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { faClock, faMapMarker, faPhone, } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './BusinessInfo.css'


const businessInfo = [
    {
        title: 'opening hours',
        des: 'lorem imsum lorem ipsum lorem ipsum',
        icon: faClock,
        background: 'primary',
    },
    {
        title: 'Visit Our Location',
        des: 'lorem imsum lorem ipsum lorem ipsum',
        icon: faMapMarker,
        background: 'dark'
    },
    {
        title: 'Contact us Now',
        des: '+065665 89686',
        icon: faPhone,
        background: 'primary'
    }
]

const BusinessInfo = () => {
    return (
        <div>
            <Container className="business-info">
                <Row className="animate__animated animate__bounce animate__repeat-2" className="mb-5 ">
                    {
                        businessInfo.map(item=>{
                            return <Col  md={4} className="text-white">
                                <div className={`d-flex  align-items-center mt-sm-2  info-item info-${item.background}`}>
                                    <div>
                                        <FontAwesomeIcon className="info-icon" icon={item.icon} />
                                    </div>
                                    <div>
                                        <h6>{item.title}</h6>
                                        <p>{item.des}</p>
                                    </div>
                                </div>
                            </Col>
                        })
                    }
                </Row>
            </Container>
        </div>
    );
};

export default BusinessInfo;
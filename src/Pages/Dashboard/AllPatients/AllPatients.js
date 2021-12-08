import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import '../Dashboard.css'
import { Col, Row, Table } from 'react-bootstrap';

const AllPatients = () => {
    const [allPatiensts, setAllPatiensts] = useState([])
    console.log(allPatiensts);
    return (
        <div>
            <Row>
                <Col md={3}>
                    <Sidebar/>
                </Col>
                <Col md={9}>
                    {
                        useEffect(()=>{
                            fetch('http://localhost:5000/appointments')
                            .then(res => res.json())
                            .then(data =>{
                                console.log(data);
                                setAllPatiensts(data);
                            })
                        },[])
                    }
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                            <th>name</th>
                            <th>email</th>
                            <th>phone</th>
                            <th>age</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allPatiensts.map(item=>{
                                     return <tr>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.phone}</td>
                                    <td>{item.age}</td>
                                  </tr>
                                })
                            }        
                        </tbody>
                        </Table>
                    
                    
                </Col>
              
            </Row>
        </div>
    );
};

export default AllPatients;
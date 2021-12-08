import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import CheckAppointment from './CheckAppointment/CheckAppointment';
import Sidebar from './Sidebar/Sidebar';
import './Dashboard.css'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Dashboard = () => {
    const [selectedDate, setSelectedDate] = useState(new Date ());
    const [appointments, setAppointments] = useState([]);

    const handleDateChange =(date)=>{
        setSelectedDate(date);

        fetch('http://localhost:5000/checkappointment',{
            method: 'POST',
            headers:{'content-type' : 'application/json'},
            body: JSON.stringify({date})
          })
        .then(res => res.json())
        .then(appointments => {
            setAppointments(appointments);
        })
        }

    return (
            <Row>
                <Col md={3} sm={12} >
                    <div >
                        <Sidebar/>
                    </div>
                </Col>
                <Col md={4} sm={12} >
                    <h4>Appointment</h4>
                    <Calendar
                            onChange={handleDateChange}
                            // value={value}
                            value={selectedDate}
                        />
                </Col>
                <Col md={4} sm={12} >
                    <CheckAppointment appointments={appointments}/>
                </Col>
            </Row>
    );
};

export default Dashboard;
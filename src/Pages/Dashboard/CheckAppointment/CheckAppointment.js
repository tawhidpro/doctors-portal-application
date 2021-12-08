import React from 'react';
import { Table } from 'react-bootstrap';
import AppointmentShortList from '../AppointmentShortList/AppointmentShortList';

const CheckAppointment = ({appointments}) => {
    console.log(appointments);
    return (
        <div>
            <h2>Check Appointments {appointments.length}</h2>
            {
                appointments.length ? <AppointmentShortList appointments={appointments} /> : <div>
                    <p>there is no appointment</p>
                </div>
            }
            
        </div>
    );
};

export default CheckAppointment;
import React from 'react';

const CheckAppointment = ({appointments}) => {
    console.log(appointments);
    return (
        <div>
            <h2>Check Appointments {appointments.length}</h2>
        </div>
    );
};

export default CheckAppointment;
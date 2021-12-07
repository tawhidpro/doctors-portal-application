import React, { useState } from 'react';
import AppointmentHeader from './AppointmentHeader/AppointmentHeader';
import AvailableAppointment from './AvailableAppointment/AvailableAppointment';


const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date ());
    const handleDateChange =(date)=>{
        setSelectedDate(date);
    }
    return (
        <div>
            <AppointmentHeader selectedDate={selectedDate} handleDateChange={handleDateChange}/>
            <AvailableAppointment date={selectedDate} />
        </div>
    );
};

export default Appointment;
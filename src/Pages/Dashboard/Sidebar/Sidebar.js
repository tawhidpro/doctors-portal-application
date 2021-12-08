import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="sidebar text-white">
            <ul>
                <li><Link to="/dashboard/checkappointment">Check Appointments</Link></li>
                <li><Link to="/dashboard/allPatients"> All Patients</Link></li>
            </ul>
        </div>
    );
};

export default Sidebar;
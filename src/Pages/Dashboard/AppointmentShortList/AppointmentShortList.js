import React from 'react';
import { Table } from 'react-bootstrap';

const AppointmentShortList = ({appointments}) => {
    console.log(appointments);
    return (
            <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>name</th>
                    <th>age</th>
                    <th>phone</th>
                    <th>email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    appointments.map((item,index)=>{
                        return  <tr>
                        <td>{item.name}</td>
                        <td>{item.age}</td>
                        <td>{item.phone}</td>
                        <td>{item.email}</td>
                        </tr>
                    })
                }
                    
                </tbody>
                </Table>
              
            </div>
    );
};

export default AppointmentShortList;
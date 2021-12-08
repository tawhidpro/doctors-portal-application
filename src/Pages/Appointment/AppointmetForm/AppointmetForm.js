import React, { useEffect } from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";
import { Form ,Button} from 'react-bootstrap';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width:'600px'
  },
};
Modal.setAppElement('#root');

const AppointmetForm = ({modalIsOpen,closeModal,date,appointmentOn}) => {

 const { register, handleSubmit, formState: { errors } } = useForm();
 const onSubmit = data => {
     data.service = appointmentOn;
     data.appointmentTime = date;
     data.appointmentCreatedTime = new Date() 
     console.log(data);

     fetch('http://localhost:5000/addappointment',{
        method: 'POST',
        headers: {
          'Content-Type' : 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(success =>{
        if(success){
          alert('your appointment has been submitted');
          closeModal()
          // console.log(data)
        }
      })
     
 };

    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h3 className="theme-color text-center">Appointment on {appointmentOn}</h3>
                <p className="text-center">{date.toDateString()}</p>
                
                
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Control className="mt-2" {...register("name")} size="lg" type="text" placeholder="Your Name" />
                    <Form.Control className="mt-2" {...register("phone", { required: true })} size="lg" type="text" placeholder="Your Phone" />
                    {errors.phone && <span style={{color: 'red'}}>phone number is required</span>}
                    <Form.Control className="mt-2" {...register("email", { required: true })} size="lg" type="text" placeholder="Your Email" />
                    {errors.email && <span style={{color: 'red'}}>email number is required</span>}
                    <Form.Select className="mt-2" {...register("gender", { required: true })} size="lg">
                        <option disabled={true} value="Not selected" >gender</option>
                        <option value="male">Male</option>
                        <option value="Female" >Female</option>
                    </Form.Select>
                    <Form.Control className="mt-2" {...register("age", { required: true })} size="lg" type="text" placeholder="age" />
                    {errors.age && <span style={{color: 'red'}}>age number is required</span>}
                    <Button className="call-to-action-btn w-100 mt-2" type="submit">
                        Submit
                    </Button>
                    
                </Form>
            </Modal>
        </div>
    );
};

export default AppointmetForm;
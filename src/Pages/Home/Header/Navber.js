import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './header.css'

const Navber = () => {
    return (
        <Navbar expand="lg">
        <Container>
            <Navbar.Brand href="#home">Doctors portal</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className=" nav-ul ml-auto justify-content-end flex-grow-1">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/link">About</Nav.Link>
                <Nav.Link href="/link">Dental services</Nav.Link>
                <Nav.Link className="text-white" href="/link">Reviews</Nav.Link>
                <Nav.Link className="text-white" href="/link" >Blog</Nav.Link>
                <Nav.Link className="text-white" href="/link">Contact</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    
    );
};

export default Navber;
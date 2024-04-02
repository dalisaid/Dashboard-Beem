import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BsPersonFill } from 'react-icons/bs';

export const NavBar = () => {
    return (
        <Navbar style={{ marginRight: '40px', marginBottom: '-90px', display: 'flex', justifyContent: 'space-between' }}>
            <Container>
                {/* Left side of the Navbar */}
            </Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                {/* Right side of the Navbar */}
                <Nav className="me-auto" style={{ display: 'flex', alignItems: 'center' }}>
                    <Nav.Link href="#link" style={{ marginTop: '10px', display: 'flex', alignItems: 'center' ,marginBottom:'20px' }}>
                        <BsPersonFill style={{ marginRight: '5px' }} />
                        MoulaBeem
                    </Nav.Link>
                    <NavDropdown title="" id="basic-nav-dropdown" style={{ marginRight: '100px', marginTop: '10px', marginBottom:'20px'}}>
                        <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Settings</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Log Out</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import {  Nav, Navbar, Form, FormControl, Button } from "react-bootstrap";

const Navigation = () => {
    const { logout } = useAuth0();
    
    return (
      <Navbar bg="light" expand="md" style={{position: 'fixed', width: '100%', zIndex: '10'}}>
          <Navbar.Brand href="/">Logo</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Form inline>
              <FormControl type="text" placeholder="Search..." className="mr-sm-2" />
              <Button variant="outline-dark">Search</Button>
            </Form>
            
              <Nav.Link className="nav-link" href="#">Explore</Nav.Link>
         
            <Nav className="ml-auto">
              <Nav.Link className="nav-link" href="/profile">Profile</Nav.Link>
              <Nav.Link className="nav-link" onClick={() => logout({returnTo: window.location.origin
            })}>Log Out</Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    );
};

export default Navigation;
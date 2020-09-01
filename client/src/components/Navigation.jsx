import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import {  Nav, Navbar, Form, FormControl, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faDumbbell,
  faHome,
  faUser,
  faSignOutAlt,
  faComments
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Navigation = () => {
    const { logout } = useAuth0();
    
    return (
      <Navbar className='nav-bar' bg="light" expand="md" style={{position: 'fixed', width: '100%', zIndex: '10'}}>
          <Link to="/" className='navbar-brand'>ZOOMFIT <FontAwesomeIcon icon={faDumbbell} /></Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Form inline>
              <FormControl type="text" placeholder="Search..." className="mr-sm-2" />
              <Button variant="outline-dark"><FontAwesomeIcon icon={faSearch} /></Button>
            </Form>
            <Nav className="transparent-background ml-auto">
              <Link className='navbar-link' to='/'><FontAwesomeIcon icon={faHome} /><br />Home</Link>
              <Link className='navbar-link' to='/'><FontAwesomeIcon icon={faComments} /><br />Messaging</Link>
              <Link className="navbar-link" to="/profile"><FontAwesomeIcon icon={faUser} /><br />Profile</Link>
              <Link className="navbar-logout navbar-link" to='/'
                onClick={() => logout({returnTo: window.location.origin})}
              ><FontAwesomeIcon icon={faSignOutAlt} /><br />Log Out</Link>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    );
};

export default Navigation;
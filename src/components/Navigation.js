import React from 'react';
import { NavLink } from 'react-router-dom'
import { Navbar } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import { FormControl } from 'react-bootstrap'
import '../containers/navigation.css'

const Navigation = () => {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand>
                    <NavLink to="/home">
                        <img src="../images/brand.png" alt="logo"/>
                    </NavLink>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <NavLink to="/home" className="nav-link">Home</NavLink>
                        <NavLink className="nav-link">Recipes</NavLink>
                        <NavLink className="nav-link">Blog</NavLink>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        )    
}

export default Navigation;
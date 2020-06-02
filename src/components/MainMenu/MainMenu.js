import React from 'react';
import { 
    Navbar, 
    Nav, 
    Container
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MainMenu = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg"  variant="dark">
            <Container>
                <Navbar.Brand  className="pt-2" as={Link} to="/home">POWER <span className="text-primary font-weight-bolder">X</span> </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/our-services">Services</Nav.Link>
                        <Nav.Link as={Link} to="/our-classes">Our Classes</Nav.Link>
                        <Nav.Link as={Link} to="/pricing">Pricing</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </>
    );
};

export default MainMenu;
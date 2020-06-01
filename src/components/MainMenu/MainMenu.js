import React from 'react';
import { 
    Navbar, 
    Nav, 
    Container
} from 'react-bootstrap';

const MainMenu = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg"  variant="dark">
            <Container>
                <Navbar.Brand  className="pt-2" href="/home">POWER <span className="text-primary font-weight-bolder">X</span> </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/services">Services</Nav.Link>
                        <Nav.Link href="/classes">Our Classes</Nav.Link>
                        <Nav.Link href="/about">About Us</Nav.Link>
                        <Nav.Link href="/blog">blog</Nav.Link>
                        <Nav.Link href="/pricing">Pricing</Nav.Link>
                        <Nav.Link href="/contact">Contact Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </>
    );
};

export default MainMenu;
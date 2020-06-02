import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const AboutUs = () => {
    return (
        <div>
            <Container className="my-5">
                <Row>
                    <Col>
                        <div className="about-us">
                            <img className="img-fluid" src="https://i.ibb.co/ZcbqbyC/about-us.jpg" alt="About us"/>
                        </div>
                    </Col>
                    <Col>2 of 2</Col>
                </Row>
            </Container>
        </div>
    );
};

export default AboutUs;
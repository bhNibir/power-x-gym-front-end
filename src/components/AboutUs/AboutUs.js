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
                    <Col>
                        <div className="">
                            <p className="text-light display-4 font-weight-bolder mb-2">ABOUT US</p>
                            <h3 className=" text-primary font-weight-bold mt-4">WE ARE HERE TO DREAM!</h3>
                            <h3 className=" font-weight-bold mb-4">OUR TEAM IS HERE TO SURVE YOU. </h3>
                            <small>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui alias voluptatem dolor odit. Voluptas et, sint quae dignissimos omnis fugiat voluptatum qui quo quisquam quod commodi reprehenderit dolores nemo perferendis iure! Aspernatur nemo minima nihil eligendi animi ipsa molestiae saepe tempora, accusamus unde quae mollitia? Ut ad harum dolore facilis tempore ex necessitatibus nulla veniam.
                            </small>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AboutUs;
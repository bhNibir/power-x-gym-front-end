import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { IoMdCheckmarkCircle } from 'react-icons/io';
import { Link } from 'react-router-dom';

const ClassSchedule = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <div >
                            <Image
                                src="https://i.ibb.co/wMHv90B/classes3.jpg"
                                width={"auto"}
                                height={380}
                                fluid

                            />
                            <p className="pt-4 p-2 text-muted" style={{lineHeight: 2}}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit dolores cum, quidem hic saepe sunt at maiores odit tenetur, inventore laudantium ad vitae, provident quo id quod consectetur illum iusto. Facere tempore provident consequuntur veniam cumque praesentium a, deleniti enim officiis velit aperiam tempora reprehenderit asperiores qui commodi expedita illo!
                            </p>
                        </div>
                    </Col>
                    <Col>
                        <div className="ml-3 text-center ">
                            <h1 className="text-uppercase font-weight-bolder"><span className="text-primary">Class</span> Schedule</h1>
                            <div className="mt-4">
                                <Row>
                                    <Col md={6}>
                                        <div className="shadow p-2 mb-3 bg-white rounded">
                                            <h4 className="font-weight-bold mb-0">Saturday</h4>
                                            <small className="text-primary">8:00 AM - 9:00 AM</small>
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div className="shadow p-2 mb-3 bg-white rounded">
                                            <h4 className="font-weight-bold mb-0">Monday</h4>
                                            <small className="text-primary">9:00 AM - 10:00 AM</small>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={6}>
                                        <div className="shadow p-2 mb-3 bg-white rounded">
                                            <h4 className="font-weight-bold mb-0">Tuesday</h4>
                                            <small className="text-primary">8:00 AM - 9:00 AM</small>
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div className="shadow p-2 mb-3 bg-white rounded">
                                            <h4 className="font-weight-bold mb-0">Wednesday</h4>
                                            <small className="text-primary">9:00 AM - 10:00 AM</small>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={6}>
                                        <div className="shadow p-2 mb-3 bg-white rounded">
                                            <h4 className="font-weight-bold mb-0">Thursday</h4>
                                            <small className="text-primary">8:00 AM - 9:00 AM</small>
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div className="shadow p-2 mb-3 bg-white rounded">
                                            <h4 className="font-weight-bold mb-0">Friday</h4>
                                            <small className="text-primary">9:00 AM - 10:00 AM</small>
                                        </div>
                                    </Col>
                                </Row>
                            </div>

                        </div>
                    </Col>
                </Row>  
                <Row>
                    <Col>
                    <div className="p-4 ">
                        <ul className="list-unstyled text-small text-secondary font-weight-bolder">
                            <li className="mt-3"><IoMdCheckmarkCircle className="text-primary"/> Getting Stronger Body </li>
                            <li className="mt-3"><IoMdCheckmarkCircle className="text-primary"/> Getting Stronger Body </li>
                            <li className="mt-3"><IoMdCheckmarkCircle className="text-primary"/> Getting Stronger Body </li>
                            <li className="mt-3"><IoMdCheckmarkCircle className="text-primary"/> Getting Stronger Body </li>
                            <li className="mt-3"><IoMdCheckmarkCircle className="text-primary"/> Getting Stronger Body </li>
                            <li className="mt-3"><IoMdCheckmarkCircle className="text-primary"/> Getting Stronger Body </li>
                        </ul>
                    </div>
                    </Col>
                    <Col>
                        <div className="d-flex h-100 justify-content-end align-items-end">
                            <Link as={Link} to="/pricing">
                                <Button className="btn btn-primary font-weight-bold py-2 px-5 mb-5 mr-5">JOIN US</Button>
                            </Link>
                        </div>
                    </Col>
                </Row>

            </Container>
        </div>
    );
};

export default ClassSchedule;
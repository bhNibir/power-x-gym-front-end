import React from 'react';
import { Container, Row , Col, Button } from 'react-bootstrap';
import SliderVideo from '../SliderVideo/SliderVideo';
import { Link } from 'react-router-dom';

const Slider = ({sliderText}) => {
    return (
        <>
        <Container >
            <Row>
                {
                  !sliderText ?  
                
                    <>
                    <Col>
                        <div className="mb-5">
                            <h1 className="text-uppercase text-white display-4 mt-5 mb-2">the best fitness <br/> studio in town </h1>
                            <p className="text-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro suscipit vitae dicta distinctio. Illum, harum. Nisi, eos? Cumque, voluptas enim?</p>
                            <Link as={Link} to="/pricing">
                                <Button className="btn btn-primary mt-3 font-weight-bold py-2 px-5 ">JOIN US</Button>
                            </Link>
                        </div>
                    </Col>
                    <Col>
                        <SliderVideo/>
                    </Col>
                </>
                :
                    <Col>
                        <div className="d-flex justify-content-center align-content-center m-5 p-5">
                            <h1 className="text-uppercase text-white display-4 font-weight-bolder m-5">{sliderText}</h1>
                        </div>
                    </Col>
                }
            </Row>
        </Container>
            
        </>
    );
};

export default Slider;
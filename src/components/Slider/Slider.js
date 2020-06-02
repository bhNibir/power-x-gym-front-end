import React from 'react';
import { Container, Row , Col } from 'react-bootstrap';
import SliderVideo from '../SliderVideo/SliderVideo';

const Slider = () => {
    return (
        <>
        <Container >
            <Row>
                <Col>
                    <div className="mb-5">
                        <h1 className="text-uppercase text-white display-4 mt-5 mb-2">the best fitness <br/> studio in town </h1>
                        <p className="text-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro suscipit vitae dicta distinctio. Illum, harum. Nisi, eos? Cumque, voluptas enim?</p>
                        <button className="btn btn-primary mt-3 font-weight-bold py-2 px-5 ">JOIN US</button>
                    </div>
                </Col>
            <Col>
                <SliderVideo/>
            </Col>
            </Row>
        </Container>
            
        </>
    );
};

export default Slider;
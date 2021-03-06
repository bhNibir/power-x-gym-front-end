import React from 'react';
import { Image, Col, Button } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ServiceItem = ({item}) => {
    return (
        
        <Col xs={6} md={4}>
            <div className="position-relative m-3 text-center">
                <Image
                        src= {item.img}
                        height={350}
                        width={350}
                        className="d-block"
                    />
                <Link to="/our-classes">
                    <Button className="classes-btn btn-block border-0 text-uppercase font-weight-bolder py-2" variant="primary">{item.name+"    "} <FaArrowRight/> </Button>
                </Link>
             </div>
        </Col>
     
 );
};


export default ServiceItem;
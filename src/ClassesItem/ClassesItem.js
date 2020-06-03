import React from 'react';
import { Image, Col, Button } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa';




const ClassesItem = ({item}) => {
    return (
        
           <Col xs={6} md={4}>
               <div className="position-relative m-3 text-center">
                <Image
                       src= {item.img}
                       height={350}
                       width={350}
                       className="d-block"
                    />
                <Button className="classes-btn btn-block border-0 text-uppercase font-weight-bolder py-2" variant="primary">{item.name+"    "} <FaArrowRight/> </Button>
                </div>
           </Col>
        
    );
};

export default ClassesItem;
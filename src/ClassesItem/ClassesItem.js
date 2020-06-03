import React from 'react';
import { Image, Col, Button } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa';




const ClassesItem = ({item}) => {
    return (
        
            // {/* <section className="">
            //     <div class="col-12 col-sm-6 col-lg-3 position-relative">
            //     <a href="https://google.com" class="d-block"><img src="https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="w-100"/></a>
            //     <a href="https://google.com" class="btn btn-primary classes-btn">Button</a>
            //     </div>
            // </section> */}
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
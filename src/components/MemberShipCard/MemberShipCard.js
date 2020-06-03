import React from 'react';
import {  Card, Button } from 'react-bootstrap';
import { FaDollarSign } from 'react-icons/fa';
import { MdDone } from 'react-icons/md';


const MemberShipCard = ({ plan, showHide }) => {
    
    const sectionStyle = {
        backgroundImage: "url(" +  plan.bgImg  + ")",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    };

    return (
        <>
             <Card style={sectionStyle} className="border-0">
                        
                        <Card.Body className="my-3"> 
                        <Card.Title className="text-primary text-uppercase font-weight-bolder"> Billed Monthly </Card.Title>
                            <h1  className="text-uppercase text-white font-weight-bolder">{plan.planName}</h1>
                        <Card.Text>
                            <p className="display-3 font-weight-bold text-primary"><FaDollarSign/>{plan.price}</p>
                            <ul className="list-unstyled text-white mt-3 mb-4">
                                <li className="py-2"><MdDone/> Fitness Signature included</li>
                                <li className="py-2"><MdDone/> Fitness Signature included</li>
                                <li className="py-2"><MdDone/> Fitness Signature included</li>
                                <li className="py-2"><MdDone/> Fitness Signature included</li>
                                <li className="py-2"><MdDone/> Fitness Signature included</li>
                                
                            </ul>
                        </Card.Text>
                            <Button className="btn-primary text-uppercase font-weight-bolder border-0 px-5" onClick={() => showHide(plan.planName, plan.price)}>Purchase</Button>
                        </Card.Body>
                    </Card> 
        </>
    );
};

export default MemberShipCard;
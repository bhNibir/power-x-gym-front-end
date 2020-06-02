import React from 'react';
import { CardDeck,  Container, Row, } from 'react-bootstrap';
import MemberShipCard from '../MemberShipCard/MemberShipCard';

const MemberShipPlan = ({showHide}) => {
    const plans = [
        {            
            planName: "advance",
            price: 140,
            bgImg: "https://i.ibb.co/tzrr7Ct/hipcravo-5-Ub-Iq-V58-CW8-unsplash.jpg",
            
        },
        {            
            planName: "Basic",
            price: 120,
            bgImg: "https://i.ibb.co/D9TjyKM/daniel-apodaca-Wdo-Qio6-HPVA-unsplash.jpg",
               
        },
        {           
            planName: "Beginner",
            price: 90,
            bgImg: "https://i.ibb.co/XYjjfdq/penguinuhh-8-VI6-Ww-EEEHw-unsplash.jpg",
            
        }
    ]
    
    return (
        <>
            <Container>
                <CardDeck className="text-center">
                        {
                            plans.map(plan => <MemberShipCard plan={plan} showHide={showHide}/>)
                        }
                </CardDeck>
            </Container>
        </>
    );
};

export default MemberShipPlan;
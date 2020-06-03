import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import BenefitsItem from '../BenefitsItem/BenefitsItem';
import dumbbell from '../../images/dumbbell.png';
import nutrition from '../../images/nutrition.png';
import watch from '../../images/watch.png';

const Benefits = () => {
    const data = [
        {
            img: watch,
            title: "progression",
            bgImg: "https://i.ibb.co/tzrr7Ct/hipcravo-5-Ub-Iq-V58-CW8-unsplash.jpg",

            
        },
        {
            img: dumbbell,
            title: "workout",
            bgImg: "https://i.ibb.co/D9TjyKM/daniel-apodaca-Wdo-Qio6-HPVA-unsplash.jpg",
            style: "text-primary mt-3"    
        },
        {
            img: nutrition,
            title: "nutrition",
            bgImg: "https://i.ibb.co/XYjjfdq/penguinuhh-8-VI6-Ww-EEEHw-unsplash.jpg",
            
        }
    ]
    return (
        <>
            <Container className="mt-3">
                <Row>
                        {
                            data.map(item => <BenefitsItem item={item} key={item.title}/>)
                        }
                    
                </Row>
            </Container>
            
        </>
    );
};

export default Benefits;
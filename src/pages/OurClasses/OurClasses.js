import React from 'react';
import MainBody from '../../components/MainBody/MainBody';
import ClassesItem from '../../ClassesItem/ClassesItem';
import { Container, Row } from 'react-bootstrap';




const OurClasses = () => {
    const ourClasses = [
        {   
            name:  "psycho training",      
            img: "https://i.ibb.co/G01Pnyk/classes1.png",
            
        },
        {   
            name:  "self defence",      
            img: "https://i.ibb.co/0h5rrZP/classes2.jpg",
            
        },
        {   
            name:  "advance gym",      
            img: "https://i.ibb.co/wMHv90B/classes3.jpg",
            
        },
        {   
            name:  "Cardio training",      
            img: "https://i.ibb.co/1v31n49/classes4.jpg",
            
        },
        {   
            name:  "Strength training",      
            img: "https://i.ibb.co/tB0bHb6/classes5.jpg",
            
        },
        {   
            name:  "psycho training",      
            img: "https://i.ibb.co/9cdr9R9/classes6.jpg",
            
        },
       
    ]

    return (
        <div>
            <MainBody>
                <Container>
                    <Row>
                         {
                             ourClasses.map(item => <ClassesItem item={item} key={item.img}/>)
                         }
                    </Row>
                </Container>
                
            </MainBody>
           
        </div>
    );
};

export default OurClasses;
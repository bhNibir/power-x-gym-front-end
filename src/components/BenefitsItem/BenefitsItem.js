import React from 'react';
import { Col } from 'react-bootstrap'


const BenefitsItem = ({item}) => {
    const sectionStyle = {
        backgroundImage: "url(" +  item.bgImg  + ")",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      };
    return (
        <>
          <Col id="benefit-item" className="text-center m-3" style={sectionStyle}>
              <div className="my-5 p-3 pt-5 text-white" >
                <img  className="mt-2 mb-4" height={item.style ? 30 : 50} width={item.style ? 50 : 30} src={item.img} alt="" />            
               <div >
                <h3 className={item.style ? item.style+" text-uppercase font-weight-bolder" : "text-uppercase font-weight-bolder"} >{item.title}</h3>
                <small> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem odit eveniet voluptates corporis distinctio. Aliquam mollitia optio iste architecto maxime. Rem, dolorum dolores!</small>
          
               </div>
              </div>
          </Col> 
        </>
    );
};

export default BenefitsItem;
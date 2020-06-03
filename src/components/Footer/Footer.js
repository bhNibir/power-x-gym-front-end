import React from 'react';
import { Container } from 'react-bootstrap';
import { GrYoutube, GrFacebook, GrInstagram, GrTwitter } from 'react-icons/gr';
import { FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-secondary text-white">
             <Container>
            
            <div className="pt-4 my-md-5 pt-md-5">
            <div className="row">
                <div className="col-12 col-md">
                    <h2  className="pt-2" >POWER <span className="text-primary font-weight-bolder">X</span> </h2>
                </div>
                <div className="col-6 col-md">
                    <h5>Need Help?</h5>
                    <ul className="list-unstyled text-small text-white">
                        <li><a href="/" className="text-white">Help Center</a></li>
                        <li><a href="/" className="text-white">Email Support</a></li>
                        <li><a href="/" className="text-white">Live Chat</a></li>
                        <li><a href="/" className="text-white">Gift Certificates</a></li>
                        <li><a href="/" className="text-white">Send Us feedback</a></li>
                    </ul>
                </div>
                <div className="col-6 col-md">
                    <h5>Digital Resources</h5>
                    <ul className="list-unstyled text-small">
                        <li><a href="/" className="text-white">Articles</a></li>
                        <li><a href="/" className="text-white">E-Books</a></li>
                    </ul>
                </div>
                <div className="col-6 col-md">
                    <h5>Connect with Us</h5>
                    <ul className="list-unstyled list-inline">
                        <li className="list-inline-item h3"><a href="/" className="text-white"><GrYoutube/></a></li>
                        <li className="list-inline-item h3"><a href="/" className="text-white"><GrFacebook/></a></li>
                        <li className="list-inline-item h3"><a href="/" className="text-white"><GrInstagram/></a></li>
                        <li className="list-inline-item h3"><a href="/" className="text-white"><GrTwitter/></a></li>                       
                        <li className="list-inline-item h3"><a href="/" className="text-white"><FaWhatsapp/></a></li>                       
                        <li className="mt-2"><a href="/" className="text-white">Forum</a></li>                       
                    </ul>
                </div>
                <div className="col-6 col-md">
                    <h5>Join Our Newsletter</h5>
                    <p className="text-small">
                         Get exclusive news features, and updates from The Shredder Weight Loss Academy
                    </p>
                </div>
               
            </div>
           </div>
           <div className="text-center p-2 pb-4">
                <small >© 2020 Power X Gym. All Rights Reserved </small>
            </div>
            
        </Container>
        </footer>
    );
};

export default Footer;
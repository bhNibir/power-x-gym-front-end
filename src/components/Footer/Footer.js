import React from 'react';
import { Container } from 'react-bootstrap';

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
                    <h5>Features</h5>
                    <ul className="list-unstyled text-small">
                    <li><a className="text-white"  href="#">Cool stuff</a></li>
                    <li><a className="text-white"  href="#">Random feature</a></li>
                    <li><a className="text-white"  href="#">Team feature</a></li>
                    <li><a className="text-white"  href="#">Stuff for developers</a></li>
                    <li><a className="text-white"  href="#">Another one</a></li>
                    <li><a className="text-white"  href="#">Last time</a></li>
                    </ul>
                </div>
                <div className="col-6 col-md">
                    <h5>Resources</h5>
                    <ul className="list-unstyled text-small">
                    <li><a className="text-white"  href="#">Resource</a></li>
                    <li><a className="text-white"  href="#">Resource name</a></li>
                    <li><a className="text-white"  href="#">Another resource</a></li>
                    <li><a className="text-white"  href="#">Final resource</a></li>
                    </ul>
                </div>
                <div className="col-6 col-md">
                    <h5>About</h5>
                    <ul className="list-unstyled text-small">
                    <li><a className="text-white"  href="#">Team</a></li>
                    <li><a className="text-white"  href="#">Locations</a></li>
                    <li><a className="text-white"  href="#">Privacy</a></li>
                    <li><a className="text-white"  href="#">Terms</a></li>
                    </ul>
                </div>
            </div>
           </div>
           <div className="text-center p-2">
                <small >© 2020 Power X Gym. All Rights Reserved </small>
            </div>
            
        </Container>
        </footer>
    );
};

export default Footer;
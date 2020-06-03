import React from 'react';
import MainBody from '../../components/MainBody/MainBody';
import { ProgressBar } from 'react-bootstrap'

const Contact = () => {
    return (
        <div>
            <MainBody>
                    <div id="main" className="text-center center-block container jumbotron">
                <div className="span12">
                    <h1><i className="fa fa-exclamation-triangle" aria-hidden="true"></i> Website Under Construction <i class="fa fa-exclamation-triangle" aria-hidden="true"></i></h1>
                    <h3>Thank you for your patience while we are renovating</h3>
                    <hr/>
                    <div >
                     <ProgressBar striped variant="primary" animated now={60} label={60+"%"} />
                    </div>
                </div>
            </div>
            </MainBody>
        </div>
    );
};

export default Contact;
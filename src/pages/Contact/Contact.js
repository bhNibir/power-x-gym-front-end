import React from 'react';
import MainBody from '../../components/MainBody/MainBody';
import { ProgressBar } from 'react-bootstrap'
import Header from '../../components/Header/Header';
import { FaExclamationTriangle } from 'react-icons/fa';

const Contact = () => {
    return (
        <>
            <MainBody>
                <div className="text-center center-block container jumbotron">
                    <div className="span12">
                        <h1><FaExclamationTriangle/> Website Under Construction <FaExclamationTriangle/></h1>
                        <h3>Thank you for your patience while we are renovating</h3>
                        <hr/>
                        <div >
                            <ProgressBar striped variant="primary" animated now={60} label={60+"%"} />
                        </div>
                    </div>
                </div>
            </MainBody>
        </>
    );
};

export default Contact;
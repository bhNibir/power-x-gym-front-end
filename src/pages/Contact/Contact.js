import React from 'react';
import MainBody from '../../components/MainBody/MainBody';

const Contact = () => {
    return (
        <div>
            <MainBody>
                    <div id="main" class="text-center center-block container jumbotron">
                <div id="detail" class="span12">
                    <h1><i class="fa fa-exclamation-triangle" aria-hidden="true"></i> Website Under Construction <i class="fa fa-exclamation-triangle" aria-hidden="true"></i></h1>
                    <h3>Thank you for your patience while we are renovating</h3>
                    <hr/>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: "60%",}}>
                            60%
                        </div>
                    </div>
                </div>
            </div>
            </MainBody>
        </div>
    );
};

export default Contact;
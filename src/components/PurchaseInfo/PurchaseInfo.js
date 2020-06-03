import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PurchaseInfo = (props) => {
    // console.log("course info: ", props.courseInfo);
    // console.log("user info: ", props.userInfo);
    // console.log("stripe info:", props.paymentInfo);

    const {courseInfo, userInfo, paymentInfo} = props;
    return (
        <div className="container mt-5 mb-5">
            <h1 className="text-center text-uppercase font-weight-bolder">Successfully Purchased</h1>

            <table className="table text-center">
                <tbody>
                    <tr>
                        <th scope="col">User Name</th>
                        <th scope="col">{userInfo.full_name}</th>
                    </tr>
                    <tr>
                        <th scope="col">User Email</th>
                        <th scope="col">{userInfo.email}</th>
                    </tr>
                    <tr>
                        <th scope="col">User Mobile Number</th>
                        <th scope="col">{userInfo.phone}</th>
                    </tr>
                    <tr>
                        <th scope="col">Plan name:</th>
                        <th scope="col">{courseInfo.planName}</th>
                    </tr>
                    <tr>
                        <th scope="col">Plan Fee:</th>
                        <th scope="col">{courseInfo.monthlyFee}</th>
                    </tr>
                    <tr>
                        <th scope="col">Payment ID:</th>
                        <th scope="col">{paymentInfo.payment_id}</th>
                    </tr>
                    <tr>
                        <th scope="col">Payment type:</th>
                        <th scope="col">{paymentInfo.card_type}</th>
                    </tr>
                    <tr>
                        <th scope="col">card Number:</th>
                        <th scope="col">{paymentInfo.card_last_four_digit}</th>
                    </tr>
                </tbody>
            </table>
            <div className="text-center">
                <Link as={Link} to="/"><Button className="btn-primary text-black text-uppercase font-weight-bolder border-0 px-5">HOME</Button></Link>
            </div>
        </div>
    );
};

export default PurchaseInfo;
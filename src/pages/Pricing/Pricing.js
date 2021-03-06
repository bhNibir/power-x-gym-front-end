import React, { useState, useContext } from 'react';
import MainBody from '../../components/MainBody/MainBody';
import UserCreate from '../../components/UserCreate/UserCreate';
import Payments from '../../components/Payments/Payments';
import MemberShipPlan from '../../components/MemberShipPlan/MemberShipPlan';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import { UserContext } from '../../App';
import PurchaseInfo from '../../components/PurchaseInfo/PurchaseInfo';
import ReactGa from 'react-ga';

const Pricing = () => {
    //state manages goes here
    const [memberShipPlan, setMemberShipPlan] = useState(true)
    const [showCreateUser, setShowCreateUser] = useState(false)
    const [showPayments, setPayments] = useState(false)
    const [showPurchaseInfo, setShowPurchaseInfo] = useState(false);
    const [courseInfo, setCourseInfo] = useState(null);
    const [paymentInfo, setPaymentInfo] = useState(null);
    const [userInfo, setUserInfo] = useState(null);

    const showHide= (plan, price) => {
        
        const courseInfo = {
            planName: plan,
            monthlyFee: price
        }
        setCourseInfo(courseInfo);

        setMemberShipPlan(false)
        setShowCreateUser(true)
        setPayments(false)

        ReactGa.event({
            category: courseInfo.planName,
            action: "try to purchase " + courseInfo.planName + " plan."
        });
    }


    const showStripe= (user) => {
        setMemberShipPlan(false)
        setShowCreateUser(false)
        setPayments(true)
        setShowPurchaseInfo(false);
        setUserInfo(user);
    }

    const showPlan= () => {
        setMemberShipPlan(true)
        setShowCreateUser(false)
        setPayments(false)
        setShowPurchaseInfo(false);
        setCourseInfo(null);
    }

    const showUser= () => {
        setMemberShipPlan(false)
        setShowCreateUser(true)
        setPayments(false)
        setShowPurchaseInfo(false);
    }

    const confirmOrder = (paymentInfo) => {
        setPaymentInfo(paymentInfo);
        setMemberShipPlan(false)
        setShowCreateUser(false)
        setPayments(false)
        setShowPurchaseInfo(true);

        ReactGa.event({
            category: "Confirm Purchase",
            action: "Purchase a plan successfully"
        });
    }

    const stripePromise = loadStripe('pk_test_eGVHDnhty24W6Zh7nZTouMuW00Z9TSdfOi');

    // console.log("course info: ", courseInfo);
    // console.log("user info: ", userInfo);
    // console.log("stripe info:", paymentInfo);


    return (
        <>
            <MainBody>
                { memberShipPlan && <MemberShipPlan showHide={showHide}/> }
                { showCreateUser && <UserCreate showStripe={showStripe} showPlan={showPlan}/> }
                {
                    showPayments && <Elements stripe={stripePromise}>
                        <Payments showUser={showUser} confirmOrder={confirmOrder} />
                    </Elements>
                }
                { showPurchaseInfo && <PurchaseInfo courseInfo={courseInfo} userInfo={userInfo} paymentInfo={paymentInfo} ></PurchaseInfo> }
                
            </MainBody>
        </>
    );
};

export default Pricing;
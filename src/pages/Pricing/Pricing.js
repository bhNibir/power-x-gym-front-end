import React, { useState } from 'react';
import MainBody from '../../components/MainBody/MainBody';
import UserCreate from '../../components/UserCreate/UserCreate';
import Payments from '../../components/Payments/Payments';
import MemberShipPlan from '../../components/MemberShipPlan/MemberShipPlan';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';

const Pricing = () => {
    //state manages goes here
    const [memberShipPlan, setMemberShipPlan] = useState(true)
    const [showCreateUser, setShowCreateUser] = useState(false)
    const [showPayments, setPayments] = useState(false)

    const showHide= () => {
        setMemberShipPlan(false)
        setShowCreateUser(true)
        setPayments(false)
    }

    const showStripe= () => {
        setMemberShipPlan(false)
        setShowCreateUser(false)
        setPayments(true)
    }

    const stripePromise = loadStripe('pk_test_eGVHDnhty24W6Zh7nZTouMuW00Z9TSdfOi');


    return (
        <div>
            <MainBody>
                { memberShipPlan && <MemberShipPlan showHide={showHide}/> }
                { showCreateUser && <UserCreate showStripe={showStripe}/> }
                {
                    showPayments && <Elements stripe={stripePromise}>
                        <Payments/>
                    </Elements>
                }
                
            </MainBody>
        </div>
    );
};

export default Pricing;
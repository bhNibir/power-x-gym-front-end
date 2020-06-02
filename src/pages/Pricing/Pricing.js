import React, { useState } from 'react';
import MainBody from '../../components/MainBody/MainBody';
import UserCreate from '../../components/UserCreate/UserCreate';
import Payments from '../../components/Payments/Payments';
import MemberShipPlan from '../../components/MemberShipPlan/MemberShipPlan';

const Pricing = () => {
    //state manages goes here
    const [memberShipPlan, setMemberShipPlan] = useState(true)
    const [showCreateUser, setShowCreateUser] = useState(false)
    const [showPayments, setPayments] = useState(false)

    const showHide= () => {
        setMemberShipPlan(false)
        setShowCreateUser(true)
    }


    return (
        <div>
            <MainBody>
                { memberShipPlan && <MemberShipPlan showHide={showHide}/> }
                { showCreateUser && <UserCreate/> }
              <Payments/>
            </MainBody>
        </div>
    );
};

export default Pricing;
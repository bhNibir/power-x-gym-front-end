import React from 'react';
import MainBody from '../../components/MainBody/MainBody';
import UserCreate from '../../components/UserCreate/UserCreate';
import Payments from '../../components/Payments/Payments';
import MemberShipPlan from '../../components/MemberShipPlan/MemberShipPlan';

const Pricing = () => {
    //state manages goes here
    return (
        <div>
            <MainBody>
              <UserCreate></UserCreate>
              <Payments/>
              <MemberShipPlan/>
            </MainBody>
        </div>
    );
};

export default Pricing;
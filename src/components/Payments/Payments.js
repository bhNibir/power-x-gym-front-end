import React, { useState } from 'react';
import {
  CardElement,
  useStripe,
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement
} from '@stripe/react-stripe-js';
import { Button } from 'react-bootstrap';

const Payments = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [paymentError, setPaymentError] = useState(null);
    const [paymentFinished, setPaymentFinished] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const value = await stripe.createPaymentMethod({
        type: 'card',
        card: elements.getElement(CardNumberElement),
        });

        if (value.error) {
            setPaymentError(value.error.message);
            setPaymentFinished(null);
        }
        else if(!value.error){
            setPaymentError(false);
            setPaymentFinished(value.paymentMethod);
        }
        console.log("stripe:", value);
        console.log("stripe info:", value.paymentMethod);
    };
    return (
        <div className="container mt-5">
            <form onSubmit={handleSubmit}>
                {/* <CardElement /> */}
                <form>
                    <div className="form-group">
                        <label htmlFor="">Card Number:</label>
                        <CardNumberElement className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Card CVC Number:</label>
                        <CardCvcElement className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Card Expiry Date:</label>
                        <CardExpiryElement className="form-control" />
                    </div>
                </form>
                
                
                
                <div className="text-right mt-5">
                    <Button type="submit" className="btn-primary pt-2 pb-2 text-uppercase font-weight-bolder border-0 px-5 " disabled={!stripe}>
                        Purchase
                    </Button>
                </div>
                {
                    paymentError && 
                    <div class="alert alert-danger mt-5" role="alert">
                        {paymentError}
                    </div>
                }
                {
                    paymentFinished && 
                    <div class="alert alert-success mt-5" role="alert">
                        successfully purchased
                    </div>
                }
            </form>
        </div>
    );
};

export default Payments;
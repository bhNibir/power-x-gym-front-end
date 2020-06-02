import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import {
  CardElement,
  useStripe,
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement
} from '@stripe/react-stripe-js';

const Payments = ({showUser, confirmOrder}) => {
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

        let paymentInfo = {
            payment_id: value.paymentMethod.id,
            card_type: value.paymentMethod.card.brand,
            card_last_four_digit: value.paymentMethod.card.last4,
            created_code: value.paymentMethod.created
        }
        confirmOrder(paymentInfo);

    };
    return (
        <div className="container mt-5">
            <form onSubmit={handleSubmit}>
                {/* <CardElement /> */}
                <h1 className="text-center mt-3 mb-5 text-uppercase font-weight-bolder">Payment Information</h1>
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

                <div className="row">
                    <div className="col">
                        <div className="text-left mt-5">
                            <Button className="btn-primary text-uppercase font-weight-bolder border-0 px-5" onClick={() => showUser()}>Back</Button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="text-right mt-5">
                            <Button type="submit" className="btn-primary pt-2 pb-2 text-uppercase font-weight-bolder border-0 px-5" disabled={!stripe}>
                                Purchase
                            </Button>
                        </div>
                    </div>
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
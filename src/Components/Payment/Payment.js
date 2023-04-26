import React from 'react'

import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';

export default function Payment() {
    const stripe = useStripe();
    const elements = useElements();
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      if (elements == null) {
        return;
      }
  
      const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card: elements.getElement(CardElement),
      });
    };

  return (
    <div>
      <form onSubmit={handleSubmit}>
      {/* <CardElement /> */}
      <button className="payment-submit" type="submit" disabled={!stripe || !elements}>
        Pay
      </button>
    </form>
    </div>
  )
}

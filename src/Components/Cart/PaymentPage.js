import React from "react";
import "./PaymentPage.css";
import { useState } from "react";
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';

export default function PaymentPage() {
  const [paymentinfo, setPaymentInfo] = useState({});
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("credit card === ",paymentinfo)
  };

  const handleChange = async (e) => {
    setPaymentInfo({ ...paymentinfo, [e.target.name]: e.target.value });
  

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
      <h1>Checkout Form</h1>
      <form onSubmit={handleSubmit} className="payment-billinginfo-main">
        <h3>Billing Info:</h3>
        {/* <label for="fullname">Name:<span class="mandatory">*</span></label> */}
        <input
          type="text"
          placeholder="divya"
          name="fullname"
          value={paymentinfo.name}
          onChange={handleChange}
          aria-label="Enter Full Name"
          required
        />
        <input
          type="email"
          aria-label="divya@gmail.com"
          placeholder="divya@gmail.com"
          name="divya@gmail.com"
          value={paymentinfo.email}
          onChange={handleChange}
        />

        <input
          type="tel"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          maxlength="16"
          placeholder="555-555-5555"
          aria-label="555-555-5555"
          name="phone"
          value={paymentinfo.phone}
          onChange={handleChange}
          required
        />

        <h3>Credit Card Info:</h3>
        <input
          type="number"
          placeholder="4242 4242 4242 4242"
          name="fullname"
          value={paymentinfo.creditcardnum}
          onChange={handleChange}
          required
        ></input>
        {/* <input type="date" placeholder='divya@gmail.com'></input> */}
        <div className="date-cvv">
          <input
            type="number"
            placeholder="month"
            aria-label="month"
            name="month"
             value={parseInt(paymentinfo.month)}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            placeholder="year"
            aria-label="year"
            name="year"
             value={parseInt(paymentinfo.year)}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            placeholder="cvv"
            aria-label="cvv"
            name="cvv"
            value={parseInt(paymentinfo.cvv)}
            onChange={handleChange}
            required
          />
        </div>
        <button className="payment-btn" type="submit" disabled={!stripe || !elements}>
            Pay
        </button>
      </form>
    </div>
  );
}

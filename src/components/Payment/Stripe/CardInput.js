import React from 'react';
import {CardElement, Elements} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe("pk_test_51HdMs9HOAxUNfXshPhVqx5DaOR8u481inkzpmMVM7MEJLkj98gwzi441XDhamgHFg1s3DckjCwsbqQfQhqB7LZb800O7RC4osH");

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      
      'color': '#32325d',
      'fontFamily': '"Helvetica Neue", Helvetica, sans-serif',
      'fontSmoothing': 'antialiased',
      'fontSize': '16px',
      '::placeholder': {
        color: '#aab7c4',
      },
    },
    invalid: {
      color: '#fa755a',
      iconColor: '#fa755a',
    },
  },
};

export default function CardInput() {
  return (

    <Elements stripe={stripePromise}>
    <   CardElement options={CARD_ELEMENT_OPTIONS} />
    </Elements>
  );
}

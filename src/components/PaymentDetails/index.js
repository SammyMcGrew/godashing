import React, { useState } from 'react';
import FormInput from './../forms/FormInput';
import Button from './../forms/Button';
import { CountryDropdown } from 'react-country-region-selector';
import './styles.scss';

const initialAddress = {
    line1: '',
    line2: '',
    city: '',
    state: '',
    zip_code: '',
    country: '',
};

const PaymentDetails = () => {
    const [billingAddress, setBillingAddress] = useState({ ...initialAddress });
    const [shippingAddress, setShippingAddress] = useState({ ...initialAddress });
    const [recipientName, setRecipientName] = useState('');
    const [nameOnCard, setNameOnCard] = useState('');

    const handleShipping = e => {
        const { name, value } = e.target;
        setShippingAddress({
            ...shippingAddress,
            [name]: value
        });
    };

    const handleBilling = e => {
        const { name, value } = e.target;
        setBillingAddress({
            ...billingAddress,
            [name]: value
        });
    };


    const handleFormSubmit = async e => {
        e.preventDefault();
    };

    return (

        <div className='paymentDetails'>
            <form onSubmit={handleFormSubmit}>

                <div className='group'>
                    <h2>
                        Shipping Address
                    </h2>

                    <FormInput
                        placeholder='Recipient Name'
                        name='recipientName'
                        handleChange={e => setRecipientName(e.target.value)}
                        value={recipientName}
                        type='text'
                    />
                    <FormInput
                        placeholder='Line 1'
                        name='line1'
                        handleChange={e => handleShipping(e)}
                        value={shippingAddress.line1}
                        type='text'
                    />
                    <FormInput
                        placeholder='Line 2'
                        name='line2'
                        handleChange={e => handleShipping(e)}
                        value={shippingAddress.line2}
                        type='text'
                    />

                    <FormInput
                        placeholder='City'
                        name='city'
                        handleChange={e => handleShipping(e)}
                        value={shippingAddress.city}
                        type='text'
                    />
                    <FormInput
                        placeholder='State'
                        name='state'
                        handleChange={e => handleShipping(e)}
                        value={shippingAddress.state}
                        type='text'
                    />
                    <FormInput
                        placeholder='Zip Code'
                        name='zip code'
                        handleChange={e => handleShipping(e)}
                        value={shippingAddress.zip_code}
                        type='text'
                    />
                    <div className='formRow checkoutInput'>
                        <CountryDropdown
                            onChange={val => handleShipping({
                                target: {
                                    name: 'country',
                                    value: val
                                }
                            })}
                            name='country'
                            value={shippingAddress.country}
                            valueType='short'
                        />
                    </div>

                </div>

                <div className='group'>
                    <h2>
                        Billing Details
                    </h2>
                    <FormInput
                        placeholder='Name on Card'
                        name='nameOnCard'
                        handleChange={e => setNameOnCard(e.target.value)}
                        value={nameOnCard}
                        type='text'
                    />
                    <FormInput
                        placeholder='Line 1'
                        name='line1'
                        handleChange={e => handleBilling(e)}
                        value={billingAddress.line1}
                        type='text'
                    />
                    <FormInput
                        placeholder='Line 2'
                        name='line2'
                        handleChange={e => handleBilling(e)}
                        value={billingAddress.line2}
                        type='text'
                    />

                    <FormInput
                        placeholder='City'
                        name='city'
                        handleChange={e => handleBilling(e)}
                        value={billingAddress.city}
                        type='text'
                    />
                    <FormInput
                        placeholder='State'
                        name='state'
                        handleChange={e => handleBilling(e)}
                        value={billingAddress.state}
                        type='text'
                    />
                    <FormInput
                        placeholder='Zip Code'
                        name='zip code'
                        handleChange={e => handleBilling(e)}
                        value={billingAddress.zip_code}
                        type='text'
                    />
                    <div className='formRow checkoutInput'>
                        <CountryDropdown
                            onChange={val => handleBilling({
                                target: {
                                    name: 'country',
                                    value: val
                                }
                            })}
                            name='country'
                            value={billingAddress.country}
                            valueType='short'
                        />
                    </div>
                </div>

                <div className='group'>
                    <h2>
                        Card Details
                    </h2>
                    <FormInput
                        placeholder='Name on card'
                        name='nameOnCard'
                        type='text'
                    />
                    <FormInput
                        placeholder='Card number'
                        name='cardNumber'
                        value='cardNumber'
                        type='number'
                    />
                    <FormInput
                        placeholder='CVV'
                        name='cvv'
                        type='number'
                    />
                </div>

            </form>
        </div>
    );
}

export default PaymentDetails;

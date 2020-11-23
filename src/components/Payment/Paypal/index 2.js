import React, { useState, useRef, useEffect } from 'react';
import SignUp from './../../../assets/SignUp.png';
// import './styles.scss';

function Paypal() {
    const [paidFor, setPaidFor] = useState(false);
    const [loaded, setLoaded] = useState(false);

    let paypalRef = useRef();

    const product = {
        price: 4.99,
        description: 'Personal Subscription',
        img: ''
    };

    useEffect(() => {
     // load paypal script //
     const script = document.createElement('script');
     script.src =
     'https://paypal.com/sdk/js?client-id=AZ8DLlHVmSB0PBq6URhkn-mV_eR0uEe1FLXJ8MtlbuPYPKpDbEqEY5ilzJ0nXQ54DXnCHjykVy_vsIZQ'
      script.addEventListener('load', () => setLoaded(true));
      document.body.appendChild(script);

    if (loaded) {
        setTimeout(() => {
        window.paypal
        .Buttons({
            createOrder: (data, actions) => {
            return actions.order.create({
             purchase_units: [
              {
                description: product.description,
                amount: {
                    currency_code: 'USD',
                    value: product.price
                   }
                 }
                ]
              });
             },
             onApprove: async (data, actions) => {
               const order = await actions.order.capture();

               setPaidFor(true);

               console.log(order);
              },
            })
         .render(paypalRef);
        });
      }
    });

    return (
        <div className='paypal'>
        {paidFor ? (
            <div>
                <h1>Congrats! Your subscription is active!</h1>
                <img src={SignUp} />
            </div>
        ) : (
            <div>
                <h1>{product.description} for ${product.price} 
                </h1>
                <img src={SignUp} />
                <div ref={v => (paypalRef = v)} />
            </div>
            )}
        </div>
    );
}

export default Paypal;
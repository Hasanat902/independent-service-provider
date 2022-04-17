import React from 'react';
import thanks from '../../images/thank-you.jpg';

const Checkout = () => {
    return (
        <div style={{ minHeight: "70vh" }}>
            <h2 className='text-center mt-3 text-info'>Checkout</h2>
            <img className='mx-auto d-block img-fluid' src={thanks} alt="" />
            <h3 className='text-center mt-3 text-success'>Thank you for ordering with us</h3>
        </div>
    );
};

export default Checkout;
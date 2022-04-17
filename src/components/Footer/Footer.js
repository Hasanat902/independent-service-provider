import React from 'react';

const Footer = () => {

    const date = new Date();
    const year = date.getFullYear();

    return (
        <div>
            <p className='text-center bg-dark text-white py-5 mt-5 mb-0'>Copyright @{year} by Authentic Homemade Food</p>
        </div>
    );
};

export default Footer;
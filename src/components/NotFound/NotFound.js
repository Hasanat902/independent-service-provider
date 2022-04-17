import React from 'react';
import notFound from '../../images/not-found.jpg';

const NotFound = () => {
    return (
        <div style={{minHeight: '70vh'}}>
            <h3 className='text-warning mt-5 text-center'>The page you requested is not found</h3>
            <img className='mt-5 mx-auto d-block' src={notFound} alt="" />
        </div>
    );
};

export default NotFound;
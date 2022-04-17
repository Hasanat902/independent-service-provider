import React from 'react';

const Service = ({service}) => {

    const {name, price, img, description} = service;

    return (
        <div className='col-12 col-md-6 col-lg-4'>
            <div className="card" style={{width: '20rem'}}>
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body text-center">
                    <h5 className="card-title">Package: {name}</h5>
                    <p className="card-title">Price: {price}</p>
                    <p className="card-text">{description}</p>
                    <a href="#" className="btn btn-success mx-auto d-block">Order Now</a>
                </div>
            </div>
            
        </div>
    );
};

export default Service;
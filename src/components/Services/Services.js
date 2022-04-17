import React from 'react';
import breakfast from '../../images/services/breakfast.jpg';
import lunch from '../../images/services/lunch.jpg';
import dinner from '../../images/services/dinner.jpg';
import Service from '../Service/Service';

const Services = () => {

    const services = [
        {id: 1, name: 'Breakfast', price: 60, img: breakfast, description: 'We provide breakfast package.Different types of breakfast served in different days.You can order this package'},
        {id: 2, name: 'Lunch', price: 120, img: lunch, description: 'Our lunch item is unique and tasty.We provide fish,meat and vegetables in different days.Its also reasonable'},
        {id: 3, name: 'Dinner', price: 100, img: dinner, description: 'You can take our dinner package.We provide it home and office.You can enjoy package anywhere.'},
    ]

    return (
        <div id='services' className='container'>
            <h2 className='text-center mt-5 mb-5'>Our Services</h2>
            <div className="row">
                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;
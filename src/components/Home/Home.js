import React from 'react';
import Banner from '../Banner/Banner';
import Comments from '../Comments/Comments';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Comments></Comments>
        </div>
    );
};

export default Home;
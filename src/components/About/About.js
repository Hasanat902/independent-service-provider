import React from 'react';
import myself from '../../images/my-image.jpeg';

const About = () => {
    return (
        <div style={{minHeight: '70vh'}}>
            <h2 className='text-center text-info mt-3'>About Me</h2>
            <div className='container'>
                    <p className='text-secondary w-50 mx-auto mt-5 border p-3 shadow fs-6'>Hello there! I am <h3>Md Abul Hasanat</h3>from Dhaka,Bangladesh.I Completed my B.SC degree.My goal is to become a Mern Stack Developer.To achieve this goal i am trying to work word.I also want to be a very good Front End Developer.That's why i am always trying to develop my skills.I have already earn many knowledge about different languages and frameworks.To knowing this types of technologies i had to done very hard work.My Journey is going on to become Professional Developer.And i dont compromise with anything to achieve my goal.If you want something at first you must have to work hard.</p>
                
            </div>
        </div>
    );
};

export default About;
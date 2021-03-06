import React from 'react';

const Blogs = () => {
    return (
        <div className='container' style={{minHeight: '70vh'}}>
            <h2 className='text-center text-info mt-2 mb-5'>Questions & Answers</h2>
           <div className='border p-3 shadow mb-3'>
                <h4>Q1: Difference between authorization and authentication?</h4>
                <p><span className='fw-bold'>Answer:</span> Authentication means confirming your own identity, while authorization means granting access to the system. In simple terms, authentication is the process of verifying who you are, while authorization is the process of verifying what you have access to.Authentication is about validating your credentials like User Name/User ID and password to verify your identity. The system determines whether you are what you say you are using your credentials. In public and private networks, the system authenticates the user identity via login passwords. Authentication is usually done by a username and password, and sometimes in conjunction with factors of authentication, which refers to the various ways to be authenticated.Authorization, on the other hand, occurs after your identity is successfully authenticated by the system, which ultimately gives you full permission to access the resources such as information, files, databases, funds, locations, almost anything. In simple terms, authorization determines your ability to access the system and up to what extent. Once your identity is verified by the system after successful authentication, you are then authorized to access the resources of the system.</p>
           </div>
            <div className='border p-3 shadow mb-3'>
                <h4>Q2: Why are you using firebase? What other options do you have to implement authentication?</h4>
                <p><span className='fw-bold'>Answer:</span> Firebase is used for many purposes that can help me to apps develop, grow and make it a quality app.Firebase is made with a developer in mind to solve all the issues they might face when making an app.Firebase, Backend-as-a-Service (BaaS), is a platform by Google that provides functionalities and helps with the backend development of your Android, iOS, or web and even some products that support Unity3D too.The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience. <br /><br />
                We can also implement authentication by openid.OpenID is an authentication protocol that allows us to authenticate users without using a local auth system. In such a scenario, a user has to be registered with an OpenID Provider and the same provider should be integrated with our authentication flow. To verify the details, we have to forward the authentication requests to the provider. On successful authentication, we receive a success message and/or profile details with which we can execute the necessary flow.
                </p>
            </div>
            <div className='border p-3 shadow'>
                <h4>Q3: What other services does firebase provide other than authentication?</h4>
                <p><span className='fw-bold'>Answer:</span> Firebase is a full package that can help in developing your mobile or web applications faster with fewer resources and more efficiency.There are many services which Firebase provides, Most useful of them are:
                <br/>a) Cloud Firestore b) Cloud Functions c) Hosting d) Cloud Storage e) Google Analytics f) predictions g) Cloud Messaging h) Dynamic Links i) Remote Config.Firebase is a full package that can help in developing your mobile or web applications faster with fewer resources and more efficiency.Firebase is originally developed by Firebase inc and later acquired by Google. It provides different kinds of services that help you to develop high-quality mobile and web applications to grow your business. It is compatible with Web, iOS, Android, and OS X clients.</p>
            </div>
        </div>
    );
};

export default Blogs;
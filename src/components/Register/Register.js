import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from "../../firebase.init";

const Register = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
    
    const handleNameBlur = event => {
        setName(event.target.value);
    }

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    if(user){
        navigate('/home')
    }
   

    const handleSubmit = event => {
        event.preventDefault();

        createUserWithEmailAndPassword(email, password);
    }

  return (
    <div style={{ minHeight: "70vh" }}>
      <h2 className="text-center mt-3 text-info">Please SignUp</h2>
      <Form onSubmit={handleSubmit} className="w-50 mx-auto">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control onBlur={handleNameBlur} type="text" placeholder="Enter your name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter your email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" required />
        </Form.Group>
        <Button
          className="w-50 mx-auto d-block"
          variant="success"
          type="submit"
        >
          SignUp
        </Button>
        <p className="mt-2">
          Already Have an Account?
          <Link to="/login" className="text-decoration-none">
            Please SignIn
          </Link>
        </p>
      </Form>
    </div>
  );
};

export default Register;

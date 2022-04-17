import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const location = useLocation();

    const navigate = useNavigate();

    let from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    if(user){
        navigate(from, { replace: true });
    }

    const handleSubmit = event => {
        event.preventDefault();

        signInWithEmailAndPassword(email, password);
    }

  return (
    <div style={{ minHeight: "70vh" }}>
      <h2 className="text-center mt-3 text-info">Please SignIn</h2>
      <Form onSubmit={handleSubmit} className="w-50 mx-auto">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" required />
        </Form.Group>
        <Button className="w-50 mx-auto d-block" variant="success" type="submit">
          SignIn
        </Button>
        <p className="mt-2">
          New to Authentic Homemade Food?<Link to='/register' className="text-decoration-none">Please SignUp</Link>
        </p>
      </Form>
      
    </div>
  );
};

export default Login;

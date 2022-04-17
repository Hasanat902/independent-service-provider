import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div style={{ minHeight: "70vh" }}>
      <h2 className="text-center mt-3 text-info">Please SignIn</h2>
      <Form className="w-50 mx-auto">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
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

import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Register.css";

const Register = () => {
  return (
    <div style={{ minHeight: "70vh" }}>
      <h2 className="text-center mt-3 text-info">Please SignUp</h2>
      <Form className="w-50 mx-auto">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
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

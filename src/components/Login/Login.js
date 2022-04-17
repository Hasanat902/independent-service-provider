import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const location = useLocation();
    let errorElement;

    const navigate = useNavigate();

    let from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
    
      const [sendPasswordResetEmail] = useSendPasswordResetEmail(
        auth
      );
    
      if(loading){
          return <Loading></Loading>
      }

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    if(user){
        navigate(from, { replace: true });
    }

    if(error){
        errorElement = <p className="text-danger">Error: {error?.message}</p>
    }

    const handleSubmit = event => {
        event.preventDefault();

        signInWithEmailAndPassword(email, password);
    }

    const resetPassword = async() => {
        await sendPasswordResetEmail(email);
        toast('Email sent');
    }

  return (
    <div style={{ minHeight: "70vh" }} className="w-50 mx-auto">
      <h2 className="text-center mt-3 text-info">Please SignIn</h2>
      <Form onSubmit={handleSubmit}>
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
      </Form>
      {errorElement}
        <p className="mt-2">
          New to Authentic Homemade Food?<Link to='/register' className="text-decoration-none">Please SignUp</Link>
        </p>
        <p>Forget Password?<button className='btn btn-link text-primary text-decoration-none' onClick={resetPassword}>Reset Password</button> </p>
        <SocialLogin></SocialLogin>
        <ToastContainer></ToastContainer> 
    </div>
  );
};

export default Login;

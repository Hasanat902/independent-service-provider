import React from 'react';
import google from '../../images/social/google.png';
import github from '../../images/social/github.png';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';


const SocialLogin = () => {

    const navigate = useNavigate();
    let errorMessage;

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const [signInWithGithub, user2, loading2, error2] = useSignInWithGithub(auth);

    if(error || error2){
        errorMessage = <p className='text-danger'>{error?.message} {error2?.message}</p>
    }

    if(user || user2){
        navigate('/home');
    }

    if(loading || loading2){
        return <Loading></Loading>
    }


    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{height: '1px'}} className='w-50 bg-secondary'></div>
                <p className='mt-2 mx-2'>or</p>
                <div style={{height: '1px'}} className='w-50 bg-secondary'></div>
            </div>
            {errorMessage}
            <button onClick={() => signInWithGoogle()} className='btn btn-secondary w-50 d-block mx-auto mb-3'>
                <img className='me-3' style={{height: '30px'}} src={google} alt="" />
                SignIn with Google
            </button>
            <button onClick={() => signInWithGithub()} className='btn btn-secondary w-50 d-block mx-auto'>
                <img className='me-3' style={{height: '30px'}} src={github} alt="" />
                SignIn with Github
            </button>
        </div>
    );
};

export default SocialLogin;
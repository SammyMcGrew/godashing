import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { emailSignInStart, googleSignInStart } from './../../redux/User/user.actions';
import './styles.scss';

import AuthWrapper from './../AuthWrapper';
import FormInput from './../forms/FormInput';
import Button from './../forms/Button';
import VideoTag from "./../VideoTag";

const mapState = ({ user }) => ({
    currentUser: user.currentUser
});

const SignIn = props => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { currentUser, isSubscribed } = useSelector(mapState);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        if (currentUser && isSubscribed) {
            resetForm();
            history.push('/');
        }

    }, [currentUser]);

    const resetForm = () => {
        setEmail('');
        setPassword('');
    };

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(emailSignInStart({ email, password }));
    }

    const handleGoogleSignIn = () => {
        dispatch(googleSignInStart());
    }


    const configAuthWrapper = {
        headline: 'LogIn'
    };


    const elementToDisplay = document.getElementById('elementToDisplay');
    let tag;
    document.getElementById("addTag").onclick = () => {
        tag = document.getElementById("videoTag").value;
        elementToDisplay.innerHTML = `<div id="item"><ziggeorecorder id="recorder-embedding" ziggeo-tags='${tag}' ziggeo-width=640 ziggeo-height=480 ziggeo-theme="minimalist" ziggeo-themecolor="red"></ziggeorecorder><div id="nextAction"></div></div>`;
    };

    return (
        <AuthWrapper {...configAuthWrapper}>
            {/* <VideoTag> */}
            
            <div className='formWrap'>
                <form onSubmit={handleSubmit}>

                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        placeholder='Email'
                        id='videoTag'
                        handleChange={e => setEmail(e.target.value)}
                    />

                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        placeholder='Password'
                        handleChange={e => setPassword(e.target.value)}
                    />


                    <Button type='button' id="addTag">
                        Submit
                    </Button>

                    <div className='socialSignin'>
                        <div className='row'>
                            <Button onClick={handleGoogleSignIn}>
                                Sign in with Google
                            </Button>
                        </div>
                    </div>

                    <div className='links'>
                        <Link to='/recovery'>
                            Reset Password
                        </Link>
                    </div>
                </form>
            </div>
           {/* </VideoTag> */}
        </AuthWrapper>
    );
}

export default SignIn;

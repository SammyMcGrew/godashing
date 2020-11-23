import React, { useState, useReducer, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import userReducer from '../../redux/User/user.reducer';
import userTypes from '../../redux/User/user.types';
import VideoGrid from './../VideoGrid';
import './styles.scss';
import store from '../../redux/createStore';

//employeeLogin && signup parent comp.
//dashboard is child comp.
const Dashboard = props => {
    const [subscriptionStatus, dispatch] = useReducer(userReducer, userTypes.SUBSCRIPTION_STATUS);
    const [ subscriptionActive, setSubscription ] = useState(false);
    let status = useDispatch({type: userTypes.SUBSCRIPTION_STATUS});
    console.log(status);
    // [ ] Send out a dispatch to get subscription status
    // [ ] Assign the status to subscriptionActive state

    if (subscriptionActive) {
        return (
            <h2>
                <VideoGrid />
                My Awesome Dashboard
            </h2>
        )
    }
    else {
        return (
            <h2>
    
                Non-Subscribed Content
            </h2>
        );
    }
};

export default Dashboard;

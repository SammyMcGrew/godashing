import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch  } from 'react-redux';
import { signOutUserStart } from './../../redux/User/user.actions';
import './styles.scss';
import { Link } from 'react-router-dom';

import Logo from './../../assets/logo.png';

const mapState = ({ user }) => ({
    currentUser: user.currentUser,
    // subscriptionActive: user.currentUser.subscriptionActive,

});

const Header = props => {
    const dispatch = useDispatch();
    const { currentUser } = useSelector(mapState);
    const [ subscriptionActive, setSubscription ] = useState(false);

    const signOut = () => {
        dispatch(signOutUserStart());
    };

    useEffect (() => { 
        console.log ("currentUser:\n==== \=======\n",currentUser)

        if (currentUser) {setSubscription(true)}

        else if(!currentUser) {
            // currentUser = false;
            setSubscription(false)
        }   
    })
 
    return (
    <header className='header'>
        <div className='wrap'>
            <div className='logo'>
                <Link to='/'>
                    <img src={Logo} alt='Dashing LOGO' />
                </Link>
            </div>

        <div className='callToActions'>

        {currentUser && subscriptionActive &&(
            <ul>
                <li>
                    <Link to='/dashboard'>
                    My Profile
                    </Link>
                     </li>
                <li>
                    <span onClick={() => signOut()}>
                        LogOut
                    </span>
                </li>
            </ul>
        )}

            {!currentUser || currentUser === null && (
                
                <ul>
                    <li>
                    <Link to='/employeeregistration'>
                    Job Seekers
                    </Link>
                     </li>
                    <li>
                    <li>
                    <Link to='/employerregistration'>
                    Businesses
                    </Link>
                     </li>
                    <Link to='/login'>
                     Login
                    </Link>
                    </li>
                    </ul>
                  )}
                  {!subscriptionActive && (
                <ul>
                      <li>
                    <Link to='/contact'>
                    Contact
                    </Link>
                     </li>
                     <li>
                    <Link to='/team'>
                    Meet the Team
                    </Link>
                     </li>
                    <li>
                    <Link to='/employeeregistration'>
                    Job Seekers
                    </Link>
                     </li>
                    <li>
                    <li>
                    <Link to='/employerregistration'>
                    Businesses
                    </Link>
                     </li>
                    
                    <Link to='/login'>
                     Login
                    </Link>
                    </li>
                    
                    </ul>
                  )}
              </div>
            </div>
        </header>
    );
};

Header.defaultProps = {
    currentUser: null 
    
};

export default Header;

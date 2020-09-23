import React from 'react';
import './styles.scss';

import Logo from './../../assets/logo.png';

const Header = props => {
    return (
        <header className='header'>
            <div className='wrap'>
             <div className='logo'>
                  <img src={Logo} alt='Dashing LOGO' />
            </div>
            </div>
        </header>
    );
}



// import { useSelector, useDispatch } from 'react-redux';
// import { signOutUserStart } from './../../redux/User/user.actions';
// import './style.scss';
// import { Link } from 'react-router-dom';

// import Logo from './../../assets/logo.png';

// const mapState = ({user}) => ({
//     currentUser: user.currentUser
// });

// const Header = props => {
//     const dispatch = useDispatch();
//     const { currentUser } = useSelector(mapState);

//     const signOut = () => {
//         dispatch(signOutUserStart());
//     };

// return (
//     <header className='header'>
//         <div className='wrap'>
//             <div className='logo'>
//                 <Link to='/'>
//                     <img src={Logo} alt='Dashing LOGO' />
//                 </Link> 
//             </div>

//             <div className='callToActions'>

//                 {currentUser && (
//                     <ul>
//                         <li>
//                             <Link to='/dashboard'>
//                                 My Account
//                         </Link>
//                         </li>
//                         <li>
//                             <span onClick={() => signOut()}>
//                                 LogOut
//                             </span>
//                         </li>
//                     </ul>
//                 )}

//                 {!currentUser && (
//                     <ul>
//                         <li>
//                             <Link to='/businessregistration'>
//                                 Businesses
//                         </Link>
//                         </li>
//                         <li>
//                             <Link to='/registration'>
//                                 Job Seekers
//                         </Link>
//                         </li>
//                         <li>
//                             <Link to='/contact'>
//                                 Contact
//                         </Link>
//                         </li>
//                         <li>
//                             <Link to='/login'>
//                                 Login
//                         </Link>
//                         </li>

//                     </ul>
//                 )}

//             </div>
//         </div>
//     </header>
// );
// };

// Header.defaultProps = {
// currentUser: null
// };

export default Header;
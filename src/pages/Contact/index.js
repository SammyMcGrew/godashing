import React from 'react';
// import { Row, Col } from 'react-bootstrap'; 
import Passion from './../../assets/contact.png';
import './styles.scss';


const Contact = props => {
    return (
<div className='contact'> 
        <div class="icon-bar">
            <a href="https://www.facebook.com/DashingCo-113381857100452/" class="facebook"><i class="fa fa-facebook"></i></a>
            <a href="#" class="google"><i class="fa fa-google"></i></a>
            <a href="https://www.instagram.com/dashingco/" class="instagram"><i class="fa fa-instagram"></i></a>
            <a href="#" class="linkedin"><i class="fa fa-linkedin"></i></a>
            
        </div>
        </div>
    );
};

export default Contact;

// note to self: 
// refer to team page styling to align carousel images horizontally

import React from 'react';
import './styles.scss';
import water from '../../assets/water.png';


const FadeTest = props => {
    return (
        <div id='test'>
            <img src={water} alt="Jane" styles="width:100%" />
        </div>
    );
}

export default FadeTest;

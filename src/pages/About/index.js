import React from 'react';
import './styles.scss';

import image1 from '../../assets/web.png';

const About = props => {
    return (

        <div className='container'>
            <img src={image1} alt='background' styles='width:100%;' />
            <div className='content'>
                <h1 id='title'>About Dashing</h1>
                <p>Dashing is a company that helps you make an impression and get a job using 1 minute videos on your job application. We were created out of a need for ourselves to stand out in the massive unemployment hike of the Covid-19 pandemic.
                Our CEO Jake Shelby had just finished school in March of 2020 when he realized that he had to do more than just submit a typical resume. He knew he needed to let the hiring managers see him speak, as opposed to skimming his paper resume and stalking social media to see his personality.
                At Dashing, we believe the traditional resume is now obsolete and the wave of the future is having a secure, online place for hiring managers to get a real impression of the job candidate via videos. Hiring managers can hear and see you, as opposed to read about you, while simultaneously skimming your job application. The goal is to take control of the first impression, all while becoming more than just another paper in a stack of resumes. With Dashing's easy-to-make online profiles, hiring managers can greatly reduce the time and costs of first wave,
                <br />
                in-person interviews. Job applicants likewise can greatly increase
                <br />
                the chances of getting a job/interview opportunity.
             <br />
                </p>
                <button type='submit'>
                 Start Your 7 Day Free Trial
                </button>
            </div>
        </div>
    );
}

export default About;
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel';
import './styles.scss';

// images
import img1 from '../../assets/dashing.png'
import img2 from '../../assets/water.png'
import img3 from '../../assets/bold.png'

const CarouselHome = props => {
    return (
        <Carousel>
            <div className='image-wrapper'>
                <img
                    src={img1}
                    alt="First slide"
                />
            </div>
            <div className='image-wrapper'>
                <img
                    src={img2}
                    alt="Third slide"
                />
            </div>
            <div className='image-wrapper'>
                <img
                    src={img3}
                    alt="Third slide"
                />
            </div>
        </Carousel>
    )
}

export default CarouselHome;

import React from 'react';
// import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel';
import './styles.scss';

// images
import img1 from '../../assets/dashing.png'
import img2 from '../../assets/water.png'
import img3 from '../../assets/bold.png'

const CarouselHome = props => {
    return (
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className='carousel-inner' roll='listbox'>
                <div className='item active'>
                    <img src={img2} alt='first' />
                    <div className='carousel-caption'>
                        <h3>First Slide</h3>
                        <p>Description</p>
                    </div>
                </div>
                <div className='item'>
                    <img src={img2} alt='second' />
                    <div className='carousel-caption'>
                        <h3>Second Slide</h3>
                        <p>Description</p>
                    </div>
                </div>
                <div className='item'>
                    <img src={img3} alt='third' />
                    <div className='carousel-caption'>
                        <h3>Third Slide</h3>
                        <p>Description</p>
                    </div>
                </div>

                <a className='left carousel-control' img src={img1} roll='button' data-slide='prev'>
                    <span className='glyphicon glyphicon-chevron-right' aria-hidden='true'></span>
                    <span className='sr-only'>Previous</span>
                </a>
                <a className='right carousel-control' img src={img3} roll='button' data-slide='next'>
                    <span className='glyphicon glyphicon-chevron-left' aria-hidden='true'></span>
                    <span className='sr-only'>Next</span>
                </a>

            </div>
        </div>
    );
}
export default CarouselHome;

//         <Carousel>

//             <div className='image-wrapper'>
//                 <img id ='test'
//                     src={img1}
//                     alt="First slide"
//                 />
//             </div>
//             <div className='image-wrapper'>
//                 <img id ='test'
//                     src={img2}
//                     alt="Third slide"
//                 />
//             </div>
//             <div className='image-wrapper'>
//                 <img id ='test'
//                     src={img3}
//                     alt="Third slide"
//                 />
//             </div>
//         </Carousel>
//     )
// }

// export default CarouselHome;

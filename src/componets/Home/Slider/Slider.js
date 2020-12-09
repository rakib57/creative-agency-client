import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import carousel from '../../../images/carousel-1.png'
// import carouse2 from '../../../images/carousel-2.png'
// import carouse3 from '../../../images/carousel-3.png'
// import carouse4 from '../../../images/carousel-4.png'
// import carouse5 from '../../../images/carousel-5.png'
import './Slider.css';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const slideData = [
    {
        id: 1,
        img: carousel
    },
    // {
    //     id: 2,
    //     img: carouse2,
    // },
    // {
    //     id: 3,
    //     img: carouse3,
    // },
    // {
    //     id: 4,
    //     img: carouse4,
    // },
    // {
    //     id: 5,
    //     img: carouse5,
    // }

]

const Slider = () => {
    return (
        <div className="slider-section my-5">
            <div className=" slide container">
                <div className="text-center py-5">
                    <h2 className=" text-light">Here are some of<span> our works</span></h2>
                </div>
                <div className="col-sm-12 col-xl-12">
                    <Swiper className="pb-2 "

                        spaceBetween={18}
                        slidesPerView={3}
                        navigation
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >

                        {
                            slideData.map(data => (
                                <SwiperSlide  className="pt-5">
                                    <div className="slide-content">
                                        <img className="img-fluid" src={data.img} alt="" />
                                    </div>
                                </SwiperSlide>
                            ))
                        }

                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Slider;

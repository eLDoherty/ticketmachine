'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay'; // Ensure to import autoplay styles if available
import SliderImage from './../../../public/images/slide1.jpg';
import SliderImage1 from './../../../public/images/slide2.jpg';
import SliderImage2 from './../../../public/images/slide3.jpg';
import Image from 'next/image';
import Alien from '../../../public/gif/alien.gif';
import "../styles/components/heroSlider.scss";

const HeroSlider: React.FC = () => {
  return (
    <div className='tm-slider'>
        <div className="tm-alien">
            <Image 
                src={Alien} 
                alt="Helo Alien" 
                className="tm-alien__gif" 
            />
        </div>
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{
                delay: 3000, // 3 seconds delay
                disableOnInteraction: false
            }}
            loop={true}
            pagination={{ clickable: true }}
            scrollbar={false}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide>
                <div className="tm-slider-content">
                    <Image 
                        src={SliderImage} 
                        alt="Slider ticket machine" 
                        className="tm-slider-content__image" 
                    />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="tm-slider-content">
                    <Image 
                        src={SliderImage1} 
                        alt="Slider ticket machine" 
                        className="tm-slider-content__image" 
                    />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="tm-slider-content">
                    <Image 
                        src={SliderImage2} 
                        alt="Slider ticket machine" 
                        className="tm-slider-content__image" 
                    />
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
  );
};

export default HeroSlider;

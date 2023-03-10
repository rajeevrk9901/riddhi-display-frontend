import React, {useEffect, useState} from 'react'
import comp_img_1 from '../../assets/Imageslist/golkul-dairy.png'
import comp_img_2 from '../../assets/Imageslist/gupta-brother.png'
import comp_img_3 from '../../assets/Imageslist/prasadam.png'
import comp_img_4 from '../../assets/Imageslist/radhe.png'
import comp_img_5 from '../../assets/Imageslist/jagdish.png'
import comp_img_6 from '../../assets/Imageslist/heaven.png'

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";



import "swiper/css/pagination";

// import required modules
import {  Autoplay } from "swiper";



 

 

const Greatclient = () => {

  const [noOfSlides]= useState(screen.width>720?5:screen.width>520?3:2);


  return (
    <>
         <div className='py-10'>
                <h1 className='text-4xl font-extrabold text-gray-800 tracking-wide text-center mt-20'>Our Great Clients</h1>
                <div className="md:mx-16 my-8 md:my-16">
                <Swiper
        slidesPerView={noOfSlides}
        loop={true}
        spaceBetween={0}
        autoplay={{delay:2000}}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay]}

        className="mySwiper"
      >
     
        <SwiperSlide>
              <div className="border-[1px] border-gray-200  mx-5 rounded-md ">
                <img src={comp_img_1} alt="" />
              </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="border-[1px] border-gray-200 mx-5 rounded-md ">
                <img src={comp_img_2} alt="" />
              </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="border-[1px] border-gray-200 mx-5 rounded-md ">
                <img src={comp_img_3} alt="" />
              </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="border-[1px] border-gray-200 mx-5 rounded-md ">
                <img src={comp_img_4} alt="" />
              </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="border-[1px] border-gray-200  mx-5 rounded-md ">
                <img src={comp_img_5} alt="" />
              </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="border-[1px] border-gray-200  mx-5 rounded-md">
                <img src={comp_img_6} alt="" />
              </div>
        </SwiperSlide>
        
      </Swiper>
      </div>
        </div>
    </>
  )
}

export default Greatclient
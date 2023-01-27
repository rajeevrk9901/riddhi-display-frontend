import React from 'react'
import comp_img_1 from '../../assets/Imageslist/golkul-dairy.png'
import comp_img_2 from '../../assets/Imageslist/gupta-brother.png'
import comp_img_3 from '../../assets/Imageslist/prasadam.png'
import comp_img_4 from '../../assets/Imageslist/radhe.png'
import comp_img_5 from '../../assets/Imageslist/jagdish.png'

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";



import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper";




const Greatclient = () => {
  return (
    <>
         <div className='py-10'>
                <h1 className='text-4xl font-extrabold text-gray-800 tracking-wide text-center mt-20'>Our Great Clients</h1>
                <Swiper
        slidesPerView={4}
        loop={true}
        spaceBetween={30}
        autoplay={{delay:2000}}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay]}

        className="mySwiper"
      >
        <SwiperSlide>
              <div className="w-100 h-100">
                <img src={comp_img_1} alt="" />
              </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="">
                <img src={comp_img_2} alt="" />
              </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="">
                <img src={comp_img_3} alt="" />
              </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="">
                <img src={comp_img_4} alt="" />
              </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="">
                <img src={comp_img_5} alt="" />
              </div>
        </SwiperSlide>
        
      </Swiper>
        </div>
    </>
  )
}

export default Greatclient
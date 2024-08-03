import React from 'react'

import "./css/home.css"
import styless from "./css/Home.module.css"


import { Swiper, SwiperSlide } from 'swiper/react';
import img from './image/1.jpg'
import img2 from './image/2.jpg'
import img3 from './image/3.jpg'
import img4 from './image/4.jpg'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './css/styles.css';
import { Autoplay, Pagination, Navigation ,EffectCoverflow} from 'swiper/modules';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


function Page() {
  const { t, i18n } = useTranslation();

  return (
    <div className={styless.bodyyy}>
     <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        // navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            
            <img src={img} alt="" className='imagess'/>
       
         <NavLink to="/home" className='btnhome' style={{position:"absolute",display:"flex"}}>{t("الرئيسية")}</NavLink>
        
        </SwiperSlide>
        <SwiperSlide><img src={img2} alt="" className='imagess'/>
        <NavLink to="/home" className='btnhome' style={{position:"absolute",display:"flex"}}>{t("الرئيسية")}</NavLink>
        </SwiperSlide>
        <SwiperSlide><img src={img3} alt="" className='imagess'/>
        <NavLink to="/home" className='btnhome' style={{position:"absolute",display:"flex"}}>{t("الرئيسية")}</NavLink>
        </SwiperSlide>
        
      </Swiper>
</div>
  )
}

export default Page

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Navigation } from 'swiper/modules';

export default function Slider() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide><img src="https://i.pinimg.com/736x/a8/4e/27/a84e27974859b1274c4f9bad4a492eee.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://img.freepik.com/premium-photo/black-background-wallpaper_764067-202.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://fotoblik.ru/wp-content/uploads/2023/09/krasno-chernyi-fon-28.webp" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://99px.ru/sstorage/53/2021/09/mid_332420_671675.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://happyhouse.guru/uploads/posts/2023-03/1678211583_happyhouse-guru-p-chernii-fon-oboi-krasivo-1.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://cdn.pixabay.com/photo/2020/04/29/11/00/abstract-5108391_1280.jpg" alt="" /></SwiperSlide>
      </Swiper>
    </>
  );
}

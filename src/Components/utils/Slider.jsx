import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
// import { Link } from 'react-router-dom';


function Slider({content,slidesPerView,className,breakpoints}) {
  return (
   <>
   <Swiper

modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
spaceBetween={2}
slidesPerView={slidesPerView}
autoplay={{
  delay: 2000,
//   disableOnInteraction: false,
}}
breakpoints={breakpoints}

>

{content?.map((item,i)=>{
            return(
                <SwiperSlide key={i}>
                  <div  to={item?.path}>
                    <img className={`hover:${item?.hover} ${className} `} src={item?.image}/> 
<p className='p-2 text-center'>{item?.name}</p>
</div>
                </SwiperSlide>
            )
        })}
</Swiper>
   </>
  )
}

export default Slider
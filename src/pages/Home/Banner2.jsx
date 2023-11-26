import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import banner1 from '../../assets/Banner/1.jpeg';
import banner2 from '../../assets/Banner/2.jpg';
import banner3 from '../../assets/Banner/3.jpg';
import banner4 from '../../assets/Banner/4.jpg';
import banner5 from '../../assets/Banner/5.jpg';
import banner6 from '../../assets/Banner/6.jpg';
const Banner = () => {
    return (
        <div className='h-screen'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><img src={banner1} className='w-full object-cover' alt="" /></SwiperSlide>
                <SwiperSlide><img src={banner2} className='w-full object-cover' alt="" /></SwiperSlide>
                <SwiperSlide><img src={banner3} className='w-full object-cover' alt="" /></SwiperSlide>
                <SwiperSlide><img src={banner4} className='w-full object-cover' alt="" /></SwiperSlide>
                <SwiperSlide><img src={banner5} className='w-full object-cover' alt="" /></SwiperSlide>
                <SwiperSlide><img src={banner6} className='w-full object-cover' alt="" /></SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Banner;
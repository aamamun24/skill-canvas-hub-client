import Container from "../../components/Shared/Container/Container";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import Card from "../../components/Card/Card";

const PopularCourses = () => {
    return (
        <div className="bg-[#E9F8F3B2] py-16">
            <Container>
                <div className="flex flex-col md:flex-row items-center gap-4">
                    <div className="w-1/4">
                        <h1 className="text-4xl md:text-center text-[#050C26] font-bold my-6">
                            Most <span className="text-[#FF7426]"><br />Popular<br />Courses</span>
                        </h1>
                    </div>
                    <div className="w-3/4">
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={10}
                            pagination={{
                                clickable: true,
                            }}
                            breakpoints={{
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 30,
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                },
                            }}
                            modules={[Pagination]}
                            className="mySwiper"
                        >
                            <SwiperSlide><Card /></SwiperSlide>
                            <SwiperSlide><Card /></SwiperSlide>
                            <SwiperSlide><Card /></SwiperSlide>
                            <SwiperSlide><Card /></SwiperSlide>
                            <SwiperSlide><Card /></SwiperSlide>
                            <SwiperSlide><Card /></SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default PopularCourses;
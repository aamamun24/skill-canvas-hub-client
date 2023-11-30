import Container from "../../components/Shared/Container/Container";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";

const PopularCourses = () => {
    const axiosPublic = useAxiosPublic()

    const { data: topEnroll = [] } = useQuery({
        queryKey: ['highestEnroll'],
        queryFn: async () => {
            const res = await axiosPublic.get('/class/highestEnroll')
            return res.data;
        }
    })

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
                            {
                                topEnroll.map(item => <SwiperSlide key={item._id}>
                                    <div className="rounded-lg min-w-fit shadow-lg bg-white">
                                        <div className='relative'>
                                            <img className='rounded-t-md w-full' src={item?.image} alt="" />
                                            <p className='bg-black bg-opacity-20 p-2 absolute top-3 right-3 rounded-md font-medium text-[#252641]'>{item?.total_enrollment}+ Students</p>
                                        </div>
                                        <div className='p-4 rounded-b-md'>
                                            <div className='flex gap-2 items-center'>
                                                <img className='w-10 h-10 object-cover rounded-full' src={item?.image} alt="" />
                                                <p className='font-medium'>{item?.name}</p>
                                            </div>
                                            <h2 className='text-2xl text-[#252641] font-bold my-2'>{item?.title}</h2>
                                            <p className='text-[#8A8A8A] mb-4'>{item?.short_description}</p>
                                            <div className='flex justify-between items-center'>
                                                <h4 className='text-[#FD661F] font-bold text-3xl'>${item?.price}</h4>
                                                <Link to={`/class/${item?._id}`} > <Button text='Enroll' /></Link>
                                            </div>
                                        </div>
                                    </div >
                                </SwiperSlide>)
                            }

                        </Swiper>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default PopularCourses;
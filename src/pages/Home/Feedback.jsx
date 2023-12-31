
import Container from '../../components/Shared/Container/Container';
import Description from '../../components/Shared/Description';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Review from '../../components/Shared/Review';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';


const Feedback = () => {

    const axiosPublic = useAxiosPublic()

    const { data: feedback = [] } = useQuery({
        queryKey: ['feedback'],
        queryFn: async () => {
            const res = await axiosPublic.get('/feedback')
            return res.data;
        }
    })

    return (
        <div className='bg-[#FDF8EE] py-16'>
            <Container>
                <div className='text-center mb-6'>
                    <h1 className="text-4xl lg:text-5xl text-[#050C26] font-semibold mb-2">
                        Student <span className="text-[#FF7426]">Feedback</span>
                    </h1>
                    <Description description="Various versions have evolved over the years, sometimes by accident," />
                </div>
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
                    centeredSlides={true}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {
                        feedback.map(item => <SwiperSlide key={item._id}>
                            <Review 
                            image={item?.image}
                            name={item?.name}
                            title={item?.title}
                            description={item?.description}
                            />
                        </SwiperSlide>)
                    }
                </Swiper>
            </Container>
        </div>
    );
};

export default Feedback;
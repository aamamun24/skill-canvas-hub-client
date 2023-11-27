import Description from '../../components/Shared/Description';
import Container from '../../components/Shared/Container/Container';
import { FaGraduationCap, FaUsers, FaVideo } from 'react-icons/fa';
import achievement from '../../assets/achievement.png';

const Achievement = () => {
    return (
        <div className='bg-[#E9F8F3B2] pt-16'>
            <Container>
                <div className='text-center mb-6'>
                    <h1 className="text-4xl lg:text-5xl text-[#050C26] font-semibold mb-2">
                        Our <span className="text-[#FF7426]">Achievement</span>
                    </h1>
                    <Description description="Various versions have evolved over the years, sometimes by accident," />
                </div>
                <div className='flex flex-col md:flex-row items-center'>
                    <div className='flex justify-between gap-4 md:gap-8'>
                        <div className='flex items-center gap-2'>
                            <button className='text-[#0075FD] bg-[#F0F7FF] p-3 rounded-md text-3xl'><FaUsers></FaUsers></button>
                            <div>
                                <h2 className='text-xl md:text-3xl font-semibold'>1000+</h2>
                                <p className='md:text-lg text-[#8A8A8A]'>Users</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-2'>
                            <button className='text-[#ED4459] bg-[#FFEEF0] p-3 rounded-md text-3xl'><FaGraduationCap /></button>
                            <div>
                                <h2 className='text-xl md:text-3xl font-semibold'>400+</h2>
                                <p className='md:text-lg text-[#8A8A8A]'>Students</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-2'>
                            <button className='text-[#FFC27A] bg-[#FFFAF5] p-3 rounded-md text-3xl'><FaVideo /></button>
                            <div>
                                <h2 className='text-xl md:text-3xl font-semibold'>50+</h2>
                                <p className='md:text-lg text-[#8A8A8A]'>Classes</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src={achievement} alt="" />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Achievement;
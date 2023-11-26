import card from '../../assets/card.png';
import Button from '../../components/Button/Button';

const Card = () => {
    return (
        <div className="rounded-lg min-w-fit">
            <div className='relative'>
                <img className='rounded-t-md' src={card} alt="" />
                <p className='bg-black bg-opacity-20 p-2 absolute top-3 right-3 rounded-md font-medium text-[#252641]'>Total enrolment</p>
            </div>
            <div className='p-4 bg-white'>
                <div className='flex gap-2 items-center'>
                    <img className='w-10 h-10 object-cover rounded-full' src={card} alt="" />
                    <p className='font-medium'>Abudullah Al Mamun</p>
                </div>
                <h2 className='text-2xl text-[#252641] font-bold my-2'>BM Data Science Professional Certificate</h2>
                <p className='text-[#8A8A8A] mb-4'>Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.</p>
                <div className='flex justify-between items-center'>
                    <h4 className='text-[#FD661F] font-bold text-3xl'>$160</h4>
                    <Button text='Enroll' />
                </div>
            </div>
        </div>
    );
};

export default Card;
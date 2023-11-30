import { FaQuoteRight } from 'react-icons/fa';

const Review = ({ image, name, title, description }) => {
    return (
        <div className='bg-white rounded-md p-8 relative'>
            <FaQuoteRight className='text-3xl md:text-5xl absolute top-5 right-5' />
            <div className='flex gap-2 items-center'>
                <img className='w-16 h-16 object-cover rounded-full' src={image} alt="" />
                <h4 className='text-xl font-medium'>{name}</h4>
            </div>
            <h2 className='text-[#050C26] text-lg md:text-3xl font-bold my-3'>{title}</h2>
            <p className='text-[#8A8A8A]'>{description}</p>
        </div>
    );
};

export default Review;
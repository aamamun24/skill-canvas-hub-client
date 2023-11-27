import { FaQuoteRight } from 'react-icons/fa';
import student from '../../assets/student.jpg';

const Review = () => {
    return (
        <div className='bg-white rounded-md p-8 relative'>
            <FaQuoteRight className='text-3xl md:text-5xl absolute top-5 right-5' />
            <div className='flex gap-2 items-center'>
                <img className='w-16 h-16 object-cover rounded-full' src={student} alt="" />
                <h4 className='text-xl font-medium'>Jenny Wilson</h4>
            </div>
            <h2 className='text-[#050C26] text-xl md:text-3xl font-bold my-3'>Course Title Name Here</h2>
            <p className='text-[#8A8A8A]'>Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.</p>
        </div>
    );
};

export default Review;
import { Link } from "react-router-dom";
import Button from "../Button/Button";

const ClassCard = ({ _id, title, image, total_enrollment, name, short_description, price }) => {
    return (
        <div className="rounded-lg min-w-fit shadow-lg bg-white">
            <div className='relative'>
                <img className='rounded-t-md w-full' src={image} alt="" />
                <p className='bg-black bg-opacity-20 p-2 absolute top-3 right-3 rounded-md font-medium text-[#252641]'>{total_enrollment}+ Students</p>
            </div>
            <div className='p-4 rounded-b-md'>
                <div className='flex gap-2 items-center'>
                    <img className='w-10 h-10 object-cover rounded-full' src={image} alt="" />
                    <p className='font-medium'>{name}</p>
                </div>
                <h2 className='text-2xl text-[#252641] font-bold my-2'>{title}</h2>
                <p className='text-[#8A8A8A] mb-4'>{short_description}</p>
                <div className='flex justify-between items-center'>
                    <h4 className='text-[#FD661F] font-bold text-3xl'>${price}</h4>
                    <Link to={`/class/${_id}`} > <Button text='Enroll' /></Link>
                </div>
            </div>
        </div >
    );
};

export default ClassCard;
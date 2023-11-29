import { Link, useParams } from "react-router-dom";
import Button from "../../components/Button/Button";
import useClass from "../../hooks/useClass";

const ClassDetails = () => {
    const [classes] = useClass()
    const { id } = useParams()
    const classDetails = classes.find(item => item._id === id)

    return (
        <div className="bg-gray-200 py-16">
            <div className="rounded-lg w-11/12 md:w-1/3 mx-auto mt-20 shadow-lg bg-white">
                <div className='relative'>
                    <img className='rounded-t-md w-full' src={classDetails?.image} alt="" />
                    <p className='bg-black bg-opacity-20 p-2 absolute top-3 right-3 rounded-md font-medium text-[#252641]'>{classDetails?.total_enrollment}+ Students</p>
                </div>
                <div className='p-4 rounded-b-md'>
                    <div className='flex gap-2 items-center'>
                        <img className='w-10 h-10 object-cover rounded-full' src={classDetails?.image} alt="" />
                        <p className='font-medium'>{classDetails?.name}</p>
                    </div>
                    <h2 className='text-2xl text-[#252641] font-bold my-2'>{classDetails?.title}</h2>
                    <p className='text-[#8A8A8A] mb-4'>{classDetails?.short_description}</p>
                    <div className='flex justify-between items-center'>
                        <h4 className='text-[#FD661F] font-bold text-3xl'>${classDetails?.price}</h4>
                        <Link to={`/payment/${classDetails?._id}`} > <Button text='Pay' /></Link>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default ClassDetails;
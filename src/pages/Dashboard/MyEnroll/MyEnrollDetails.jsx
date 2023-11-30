import { useParams } from "react-router-dom";
import useAcceptedClass from "../../../hooks/useAcceptedClass";
import ReactStars from "react-rating-stars-component";
import { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Button from "../../../components/Button/Button";
import useAuth from "../../../hooks/useAuth";

const MyEnrollDetails = () => {
    const {user} = useAuth()
    const [ratingValue, setRatingValue] = useState(0);
    const [classes] = useAcceptedClass()
    const { id } = useParams()
    const classDetails = classes.find(item => item._id === id)

    const { register, handleSubmit, reset } = useForm()
    const axiosSecure = useAxiosSecure()

    const onSubmit = async (data) => {
        if (data) {
            const feedback = {
                title: classDetails.title,
                name: user.displayName,
                image: user.photoURL,
                description: data.description,
                rating: ratingValue
            }

            console.log(feedback);

            const feedbackRes = await axiosSecure.post('/feedback', feedback)
            if (feedbackRes.data.insertedId) {
                toast.success('Thank for your feedback')
                reset()
            }
        }
    }

    return (
        <div className="rounded-lg min-w-fit shadow-lg bg-white">
            <div className='relative'>
                <img className='rounded-t-md w-full' src={classDetails?.image} alt="" />
            </div>
            <div className='p-4 rounded-b-md'>
                <h2 className='text-2xl text-[#252641] font-bold my-2'>{classDetails?.title}</h2>

                <form onSubmit={handleSubmit(onSubmit)}>

                    <div>
                        <label className="label">
                            <span className="label-text">Description *</span>
                        </label>
                        <textarea
                            {...register('description', { required: true })}
                            placeholder="Description about this class..."
                            className="textarea textarea-bordered w-full" />
                    </div>

                    <ReactStars
                        count={5}
                        onChange={(value) => setRatingValue(value)}
                        size={40}
                        activeColor="#FD661F"
                    />
                    
                    <div className="mt-4 flex justify-center">
                        <Button text='submit for review' />
                    </div>

                </form>
            </div>
        </div >
    );
};

export default MyEnrollDetails;
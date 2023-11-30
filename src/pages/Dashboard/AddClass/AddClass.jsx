import { useForm } from "react-hook-form";
import Button from "../../../components/Button/Button";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const AddClass = () => {
    const axiosPublic = useAxiosPublic()
    const { user } = useAuth()
    const { register, handleSubmit } = useForm()
    const axiosSecure = useAxiosSecure()
    const navigate = useNavigate()

    const onSubmit = async (data) => {
        if (data) {
            const imageFile = { image: data.image[0] }
            const res = await axiosPublic.post(image_hosting_api, imageFile, {
                headers: {
                    'content-type': "multipart/form-data"
                }
            })

            if (res.data.success) {
                const addClass = {
                    title: data.title,
                    name: user.displayName,
                    email: user.email,
                    price: data.price,
                    short_description: data.short_description,
                    image: res.data.data.display_url,
                    total_enrollment: 0,
                    status: "pending"
                }
                console.log(addClass);
                const classRes = await axiosSecure.post('/class', addClass)
                if (classRes.data.insertedId) {
                    toast.success('Class added, await for admin confirmation')
                    navigate('/dashboard/my-class')
                }
            }
        }
    }

    return (
        <div className="p-10 bg-white rounded-md">
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* title */}
                <div className="w-full">
                    <label className="label">
                        <span className="label-text">Title *</span>
                    </label>
                    <input
                        {...register('title', { required: true })}
                        type="text"
                        placeholder="Title"
                        className="input input-bordered w-full" />
                </div>

                <div>
                    <label className="label">
                        <span className="label-text">Price *</span>
                    </label>
                    <input
                        {...register('price', { required: true })}
                        type="number"
                        placeholder="Price"
                        className="textarea textarea-bordered w-full" />
                </div>

                <div>
                    <label className="label">
                        <span className="label-text">Short Description *</span>
                    </label>
                    <textarea
                        {...register('short_description', { required: true })}
                        placeholder="Short Description"
                        className="textarea textarea-bordered w-full" />
                </div>

                <div className="mb-4">
                    <input {...register('image', { required: true })} type="file" className="file-input w-full" />
                </div>

                <div className="mt-4">
                    <Button text='add class' />
                </div>
            </form>
        </div>
    );
};

export default AddClass;
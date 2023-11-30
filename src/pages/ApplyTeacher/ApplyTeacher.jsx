import { useForm } from "react-hook-form";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import Button from "../../components/Button/Button";
import Container from "../../components/Shared/Container/Container";
import SectionTitle from "../../components/Shared/SectionTitle";
import useRole from "../../hooks/useRole";

const ApplyTeacher = () => {
    const { user } = useAuth()
    const { register, handleSubmit, reset } = useForm()
    const axiosSecure = useAxiosSecure()
    const [role] = useRole()

    const onSubmit = async (data) => {
        if (data) {
            const request = {
                userId: role._id,
                name: user.displayName,
                image: user.photoURL,
                experience: data.experience,
                title: data.title,
                category: data.category,
                email: user.email,
                status: "pending"
            }

            const requestRes = await axiosSecure.post('/request', request)
            if (requestRes.data.insertedId) {
                toast.success('Request for teacher, await for confirmation')
                reset()
            }
        }
    }

    return (
        <div className="bg-[#E9F8F3B2] pt-32 pb-16">
            <Container>
                <div className="p-10 bg-white rounded-md">
                    <div className="text-center">
                        <SectionTitle text='Apply for' colorText='Teacher' />
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                {...register('name', { required: true })}
                                value={user?.displayName}
                                type="text"
                                placeholder="Name"
                                className="input input-bordered w-full" />
                        </div>

                        <div className="flex flex-col md:flex-row gap-5">

                            <div className="w-full">
                                <label className="label">
                                    <span className="label-text">Experience  *</span>
                                </label>
                                <select defaultValue="default" {...register('experience', { required: true })}
                                    className="select select-bordered w-full">
                                    <option disabled value="default">Select a category</option>
                                    <option value="beginner">Beginner</option>
                                    <option value="experienced">Experienced</option>
                                    <option value="some-idea">Some idea</option>
                                </select>
                            </div>

                            <div className="w-full">
                                <label className="label">
                                    <span className="label-text">Category  *</span>
                                </label>
                                <select defaultValue="default" {...register('category', { required: true })}
                                    className="select select-bordered w-full">
                                    <option disabled value="default">Select a category</option>
                                    <option value="web-development">Web Development</option>
                                    <option value="digital-marketing">Digital Marketing</option>
                                    <option value="e-commerce">E-commerce</option>
                                    <option value="cybersecurity">Cybersecurity</option>
                                    <option value="data-analytics">Data Analytics</option>
                                </select>
                            </div>
                        </div>

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

                        <div className="mt-4 flex justify-center">
                            <Button text='submit for review' />
                        </div>
                    </form>
                </div>
            </Container>
        </div>
    );
};

export default ApplyTeacher;
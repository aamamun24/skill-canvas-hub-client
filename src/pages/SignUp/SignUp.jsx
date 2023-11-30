import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import SocialLogin from '../../components/SocialLogin/SocialLogin';
import useAuth from '../../hooks/useAuth';
import { Helmet } from 'react-helmet-async/lib';
import useAxiosPublic from '../../hooks/useAxiosPublic';

const SignUp = () => {
    const { createUser, updateUserProfile } = useAuth()
    const navigate = useNavigate()
    const axiosPublic = useAxiosPublic()

    const { register, handleSubmit, reset, formState: { errors }, } = useForm()
    const onSubmit = (data) => {
        createUser(data.email, data.password)
            .then(result => {
                console.log(result);
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        // create user entry in database
                        const userInfo = {
                            image: data.photoURL,
                            name: data.name,
                            email: data.email,
                            role: 'user'
                        }

                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    reset()
                                    toast.success('User Created Successfully')
                                    navigate('/')
                                }
                            })
                    })
                    .catch((err) => console.log(err))
            })
            .catch(err => {
                console.log(err.message);
            })
    }

    return (
        <div className="h-screen my-2 flex flex-col items-center">
            <div className="bg-gray-100 p-8 rounded shadow-md w-11/12 md:w-2/3 lg:w-1/3">
                <Helmet>
                    <title>Skill Canvas Hub | Sign Up</title>
                </Helmet>
                <h2 className="text-3xl text-center font-semibold mb-6">Sign Up</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label className="block text-gray-600 text-sm font-medium mb-2">Name</label>
                        <input type="text" {...register("name", { required: true })} name="name" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200" placeholder="Enter your name" />
                        {errors.name && <span className='text-red-500'>Name is required</span>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-600 text-sm font-medium mb-2">Email</label>
                        <input type="email" {...register("email", { required: true })} name="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200" placeholder="Enter your email" />
                        {errors.email && <span className='text-red-500'>Email is required</span>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-600 text-sm font-medium mb-2">Photo URL</label>
                        <input type="text" {...register("photoURL", { required: true })} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200" placeholder="Enter your Photo URL" />
                        {errors.photoURL && <span className='text-red-500'>Photo is required</span>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-600 text-sm font-medium mb-2">Password</label>
                        <input type="password" {...register("password", {
                            required: true,
                            minLength: 6,
                            pattern: /(?=.*[A-Z])(?=.*[!@#$%^&*()_+])/
                        })} name="password" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200" placeholder="Enter your password" />
                        {errors.password?.type === 'required' && <span className='text-red-500'>Password is required</span>}
                        {errors.password?.type === 'minLength' && <span className='text-red-500'>Password must be at least 6</span>}
                        {errors.password?.type === 'pattern' && <span className='text-red-500'>Password must have one upper case and special character</span>}
                    </div>
                    <button type="submit" className="w-full bg-[#4D2C5E] text-white rounded-lg py-2 font-semibold hover:bg-[#2d1738] focus:outline-none mb-4"
                    >Sign Up</button>
                    <p className="text-center text-gray-600 text-sm my-4">
                        Already have an account? <Link to="/login" className="text-blue-500">Login</Link>
                    </p>
                    <SocialLogin />
                </form>
            </div>
        </div>
    );
};

export default SignUp;
import { FcGoogle } from 'react-icons/fc'
// import useAuth from "../../hooks/useAuth";
// import useAxiosPublic from "../../hooks/useAxiosPublic";
// import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
    // const { googleSignIn } = useAuth()
    // const axiosPublic = useAxiosPublic()
    // const navigate = useNavigate()

    const handleGoogleSignIn = () => {
        // googleSignIn()
        //     .then(result => {
        //         const userInfo = {
        //             email: result.user?.email,
        //             name: result.user?.displayName
        //         }
        //         axiosPublic.post('/users', userInfo)
        //             .then(() => {
        //                 navigate('/')
        //             })
        //     })
    }

    return (
        <div>
            <h2 className="text-gray-600 text-sm font-medium mb-2 text-center">Login with social account</h2>
            <button onClick={handleGoogleSignIn} className="w-full border border-[#FF7426] rounded-lg py-2 font-semibold flex gap-2 items-center justify-center"
            ><FcGoogle /> Continue with Google</button>
        </div>
    );
};

export default SocialLogin;
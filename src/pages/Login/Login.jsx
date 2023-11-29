import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";

const Login = () => {

    const { signIn } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.form?.pathname || '/'

    const handleLogin = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('Successfully Login');
                navigate(from, { replace: true })
            })
            .catch(err => {
                console.log(err.message);
                toast.error(err.message);
            })
    }

    return (
        <div className="h-screen flex flex-col items-center justify-center ">
            <div className="bg-gray-100 p-8 rounded shadow-md w-1/3 md:w-96">
                <h2 className="text-3xl text-center font-semibold mb-6">Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label className="block text-gray-600 text-sm font-medium mb-2">Email</label>
                        <input type="email" name="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200" placeholder="Enter your email" required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-600 text-sm font-medium mb-2">Password</label>
                        <input type="password" name="password" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200" placeholder="Enter your password" required />
                    </div>
                    <button type="submit" className="disabled:bg-gray-500 w-full bg-[#4D2C5E] text-white rounded-lg py-2 font-semibold hover:bg-[#442355] focus:outline-none mb-4"
                    >Log In</button>
                    <SocialLogin />
                    <p className="text-center text-gray-600 text-sm mt-4">
                        Don not have an account? <Link to="/signup" className="text-blue-500"> Sign Up</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;
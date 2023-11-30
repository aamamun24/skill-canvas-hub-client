import Container from "../../components/Shared/Container/Container";
import join from '../../assets/join.png';
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";

const SignUpFree = () => {
    return (
        <div className='bg-[#FDF8EE] py-16'>
            <Container>
            <div className='flex flex-col-reverse md:flex-row gap-6 items-center'>                    
                    <div>
                        <h2 className='text-2xl md:text-5xl font-semibold'>Join Worlds largest learning platform today</h2>
                        <p className='text-[#8A8A8A] my-4'>Start learning by registering for free</p>
                        <Link to='/signup'><Button text="Sign up for free" /></Link>
                    </div>
                    <div>
                        <img className='rounded-md' src={join} alt="" />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default SignUpFree;
import { FaFacebook, FaInstagram, FaLinkedin, FaPhone, FaTwitter } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import Container from "../Container/Container";
import logo from '../../../../public/logo-icon.png';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-8">
            <Container>
                <div className="flex flex-col lg:flex-row justify-between items-center mb-6">
                    <div className="flex flex-col items-center lg:items-start mb-4 lg:mb-0">
                        <img src={logo} alt="" className="h-14 w-14 mb-2" />
                        <h2 className="text-2xl font-bold text-[#FD661F]">Skill Canvas Hub</h2>
                        <p className="text-[#8A8A8A] my-2">Empowering minds through knowledge.</p>
                        <div className="flex mt-2 space-x-4">
                            <a href="#" className="text-white hover:text-gray-400"><FaFacebook /></a>
                            <a href="#" className="text-white hover:text-gray-400"><FaTwitter /></a>
                            <a href="#" className="text-white hover:text-gray-400"><FaLinkedin /></a>
                            <a href="#" className="text-white hover:text-gray-400"><FaInstagram /></a>
                        </div>
                    </div>

                    <div className="flex flex-row lg:flex-col gap-6 lg:gap-0">
                        <a href="#" className="text-white hover:text-gray-400 mb-2">Home</a>
                        <a href="#" className="text-white hover:text-gray-400 mb-2">Courses</a>
                        <a href="#" className="text-white hover:text-gray-400 mb-2">About Us</a>
                        <a href="#" className="text-white hover:text-gray-400 mb-2">Contact</a>
                    </div>

                    <div className="text-[#8A8A8A] text-center lg:text-start my-4 lg:my-0">
                        <p>Gazipur, Dhaka</p>
                        <p>Bangladesh, 1743</p>
                    </div>

                    <div className="text-[#8A8A8A]">
                        <p className="flex gap-2 items-center"><MdOutlineMail className="text-xl" /> bdmamun100@gmail.com</p>
                        <p className="flex gap-2 items-center"><FaPhone /> +8801794798000</p>
                    </div>
                </div>

                <hr />
                <div className="text-center text-[#8A8A8A] pt-4">
                    <p>&copy; 2023 Skill Canvas Hub. All rights reserved.</p>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
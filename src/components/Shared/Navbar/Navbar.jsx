import { useState } from "react";
import logo from '../../../../public/logo.png';
import Container from "../Container/Container";
import { Link, NavLink } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { CiLogin } from "react-icons/ci";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const navLinks = <>
        <li><NavLink to="/" className={({ isActive }) => isActive ? "text-[#FD661F] text-lg font-bold" : "text-[#252641] text-lg font-medium"
        }>Home</NavLink></li>
        <li><NavLink to="/add-class" className={({ isActive }) => isActive ? "text-[#FD661F] text-lg font-bold" : "text-[#252641] text-lg font-medium"
        }>Add Class</NavLink></li>
        <li><NavLink to="/about" className={({ isActive }) => isActive ? "text-[#FD661F] text-lg font-bold" : "text-[#252641] text-lg font-medium"
        }>About</NavLink></li>
    </>

    return (
        <nav className="fixed w-full shadow-sm z-20">
            <div className="py-4 border-b">
                <Container>
                    <div className="flex justify-between items-center">
                        {/* logo */}
                        <div className="order-2 md:order-1">
                            <img className="w-40" src={logo} alt="" />
                        </div>

                        {/* NavLink for medium */}
                        <ul className="hidden md:flex items-center gap-6 order-2">
                            {navLinks}
                        </ul>

                        {/* navLink for mobile */}
                        <div className="md:hidden order-1">
                            <FiMenu onClick={toggleMenu} className="text-3xl"></FiMenu>
                            {isOpen && (
                                <ul className="absolute top-0 left-0 mt-16 bg-black bg-opacity-25 rounded-md p-4">
                                    {navLinks}
                                </ul>
                            )}
                        </div>

                        {/* button */}
                        <div className="order-last flex gap-6">
                            <Link to='login' className="bg-white font-medium uppercase px-4 py-2 text-[#4D2C5E] rounded-full flex items-center gap-2 border border-[#4D2C5E]" >Log In <CiLogin /> </Link>
                            <Link to='signup' className="bg-[#4D2C5E] font-medium uppercase px-4 py-2 text-white rounded-full hidden lg:block">Sign Up</Link>
                        </div>
                    </div>
                </Container>
            </div>
        </nav>
    );
}

export default Navbar;

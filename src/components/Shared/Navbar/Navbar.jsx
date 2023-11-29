import { useState } from "react";
import Container from "../Container/Container";
import { Link, NavLink } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import useAuth from "../../../hooks/useAuth";
import { FaLock, FaSignOutAlt } from "react-icons/fa";
import Logo from "../Logo";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { user, logOut } = useAuth();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const navLinks = <>
        <li><NavLink to="/" className={({ isActive }) => isActive ? "text-[#FD661F] text-lg font-bold" : "text-[#252641] text-lg font-medium"
        }>Home</NavLink></li>
        <li><NavLink to="/all-classes" className={({ isActive }) => isActive ? "text-[#FD661F] text-lg font-bold" : "text-[#252641] text-lg font-medium"
        }>All Classes</NavLink></li>
        <li><NavLink to="/apply-teacher" className={({ isActive }) => isActive ? "text-[#FD661F] text-lg font-bold" : "text-[#252641] text-lg font-medium"
        }>Teach On Skill Canvas</NavLink></li>
    </>

    return (
        <nav className="fixed w-full shadow-sm z-20 bg-black bg-opacity-25">
            <div className="py-4">
                <Container>
                    <div className="flex justify-between items-center">
                        {/* logo */}
                        <div className="order-2 md:order-1">
                            <Logo/>
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
                            {user ?
                                <>
                                    <div className="dropdown dropdown-end">
                                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                            <div className="w-10 rounded-full">
                                                <img src={user?.photoURL} alt="" />
                                            </div>
                                        </div>
                                        <ul className="mt-3 z-[1] p-4 shadow dropdown-content bg-base-100 rounded-md w-52">
                                            <li className="font-medium">{user?.displayName}</li>
                                            <li><Link to='/dashboard' className="text-[#252641] text-lg font-medium my-2">Dashboard</Link></li>
                                            <li><button onClick={logOut} className="flex gap-2 items-center text-[#FD661F] font-semibold">Logout <FaSignOutAlt /></button></li>
                                        </ul>
                                    </div>
                                </>
                                :
                                <>
                                    <Link to='login' className="bg-white font-medium uppercase px-4 py-2 text-[#4D2C5E] rounded-full flex items-center gap-2 border border-[#4D2C5E]" >Log In <FaLock/> </Link>
                                    <Link to='signup' className="bg-[#4D2C5E] font-medium uppercase px-4 py-2 text-white rounded-full hidden lg:block">Sign Up</Link>
                                </>}
                        </div>
                    </div>
                </Container>
            </div>
        </nav>
    );
}

export default Navbar;

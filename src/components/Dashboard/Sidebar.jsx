import { useState } from 'react'
import { AiOutlineBars } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import Logo from '../Shared/Logo'
import { FaSignOutAlt } from 'react-icons/fa'
import useRole from '../../hooks/useRole'

const Sidebar = () => {
    const { logOut } = useAuth()
    const [isActive, setActive] = useState(false)
    const [role] = useRole()

    // Sidebar Responsive Handler
    const handleToggle = () => {
        setActive(!isActive)
    }

    return (
        <>
            {/* Small Screen Navbar */}
            <div className='bg-gray-100 text-gray-800 flex justify-between md:hidden'>
                <div className='p-4'>
                    <Logo />
                </div>

                <button
                    onClick={handleToggle}
                    className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-200'
                >
                    <AiOutlineBars className='h-5 w-5' />
                </button>
            </div>

            {/* Sidebar */}
            <div className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${isActive && '-translate-x-full'} md:translate-x-0 transition duration-200 ease-in-out`}>
                <div>
                    <div className='hidden md:block'>
                        <Logo />
                    </div>

                    {/* Nav Items */}
                    <div className='flex flex-col justify-between flex-1 mt-6 ml-2' >
                        <ul>
                            {
                                role?.role === 'user' &&
                                <li>
                                    <NavLink to="/dashboard/my-enroll" className={({ isActive }) => isActive ? "text-[#FD661F] text-lg font-bold" : "text-[#252641] text-lg font-medium"
                                    }>My Enroll Class</NavLink>
                                </li>
                            }
                            {
                                role?.role === 'admin' &&
                                <>
                                    <li>
                                        <NavLink to="/dashboard/teacher-request" className={({ isActive }) => isActive ? "text-[#FD661F] text-lg font-bold" : "text-[#252641] text-lg font-medium"
                                        }>Teacher Request</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/users" className={({ isActive }) => isActive ? "text-[#FD661F] text-lg font-bold" : "text-[#252641] text-lg font-medium"
                                        }>Users</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/all-classes" className={({ isActive }) => isActive ? "text-[#FD661F] text-lg font-bold" : "text-[#252641] text-lg font-medium"
                                        }>All Classes</NavLink>
                                    </li>
                                </>
                            }
                            {
                                role?.role === 'teacher' &&
                                <>
                                    <li>
                                        <NavLink to="/dashboard/add-class" className={({ isActive }) => isActive ? "text-[#FD661F] text-lg font-bold" : "text-[#252641] text-lg font-medium"
                                        }>Add class</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/my-class" className={({ isActive }) => isActive ? "text-[#FD661F] text-lg font-bold" : "text-[#252641] text-lg font-medium"
                                        }>My class</NavLink>
                                    </li>
                                </>
                            }
                        </ul>
                    </div>
                </div>

                <div className='space-y-3'>
                    <hr />
                    <NavLink to="/dashboard/profile" className={({ isActive }) => isActive ? "text-[#FD661F] text-lg font-bold" : "text-[#252641] text-lg font-medium"
                    }>
                        Profile
                    </NavLink>
                    <button onClick={logOut} className="flex gap-2 items-center text-[#FD661F] font-semibold">Logout <FaSignOutAlt /></button>
                </div>
            </div>
        </>
    )
}

export default Sidebar

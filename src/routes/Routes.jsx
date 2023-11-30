import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Main from '../layouts/Main';
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";
import AllClasses from "../pages/AllClasses/AllClasses";
import ClassDetails from "../pages/ClassDetails/ClassDetails";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../layouts/Dashboard";
import Payment from "../pages/Payment/Payment";
import ApplyTeacher from "../pages/ApplyTeacher/ApplyTeacher";
import MyEnroll from "../pages/Dashboard/MyEnroll/MyEnroll";
import MyEnrollDetails from "../pages/Dashboard/MyEnroll/MyEnrollDetails";
import TeacherRequest from "../pages/Dashboard/TeacherRequest/TeacherRequest";
import Users from "../pages/Dashboard/Users/Users";
import AddClass from "../pages/Dashboard/AddClass/AddClass";
import MyClass from "../pages/Dashboard/MyClass/MyClass";
import AllClass from "../pages/Dashboard/AllClass/AllClass";
import ClassProgress from "../pages/Dashboard/AllClass/ClassProgress";
import Profile from "../pages/Dashboard/Profile/Profile";
import AdminRoute from "./AdminRoute";
import TeacherRoute from "./TeacherRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/all-classes",
                element: <AllClasses />
            },
            {
                path: "/class/:id",
                element: <PrivateRoute><ClassDetails /></PrivateRoute>
            },
            {
                path: "/payment/:id",
                element: <PrivateRoute><Payment /></PrivateRoute>
            },
            {
                path: "/apply-teacher",
                element: <PrivateRoute><ApplyTeacher /></PrivateRoute>
            }
        ]
    },
    {
        path: "/signup",
        element: <SignUp />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/dashboard",
        element: <PrivateRoute><Dashboard /></PrivateRoute>,
        children: [
            // user or student routes
            {
                path: 'my-enroll',
                element: <PrivateRoute><MyEnroll /></PrivateRoute>
            },
            {
                path: 'my-enroll/:id',
                element: <PrivateRoute><MyEnrollDetails /> </PrivateRoute>
            },
            {
                path: 'profile',
                element: <PrivateRoute><Profile /></PrivateRoute>
            },
            // admin routes
            {
                path: 'teacher-request',
                element: <AdminRoute><TeacherRequest /></AdminRoute>
            },
            {
                path: 'users',
                element: <AdminRoute><Users /></AdminRoute>
            },
            {
                path: 'all-class',
                element: <AdminRoute><AllClass /></AdminRoute>
            },
            {
                path: 'class/:id',
                element: <AdminRoute><ClassProgress /></AdminRoute>
            },
            // teacher routes
            {
                path: 'add-class',
                element: <TeacherRoute><AddClass /></TeacherRoute>
            },
            {
                path: 'my-class',
                element: <TeacherRoute><MyClass /></TeacherRoute>
            }
        ]
    }
]);

export default router;
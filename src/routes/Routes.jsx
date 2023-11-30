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
            {
                path: 'profile',
                element: <Profile />
            },
            // user or student routes
            {
                path: 'my-enroll',
                element: <PrivateRoute><MyEnroll /></PrivateRoute>
            },
            {
                path: 'my-enroll/:id',
                element: <PrivateRoute><MyEnrollDetails /> </PrivateRoute>
            },
            // admin routes TODO <AdminRoute/>
            {
                path: 'teacher-request',
                element: <TeacherRequest />
            },
            {
                path: 'users',
                element: <Users />
            },
            {
                path: 'all-class',
                element: <AllClass />
            },
            {
                path: 'class/:id',
                element: <ClassProgress />
            },
            // teacher routes TODO <TeacherRoute/>
            {
                path: 'add-class',
                element: <AddClass />
            },
            {
                path: 'my-class',
                element: <MyClass />
            }
        ]
    }
]);

export default router;
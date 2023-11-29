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
                path: 'my-enroll',
                element: <PrivateRoute><MyEnroll /></PrivateRoute>
            },
            {
                path: 'my-enroll/:id',
                element: <PrivateRoute><MyEnrollDetails /> </PrivateRoute>
            }
        ]
    }
]);

export default router;
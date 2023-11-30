import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Loader from "../components/Shared/Loader";
import useRole from "../hooks/useRole";

const AdminRoute = ({ children }) => {
    const { user, loading } = useAuth()
    const location = useLocation()
    const [role, isLoading] = useRole()

    if (loading || isLoading) {
        return <Loader />
    }

    if (user && role.role === 'admin') {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default AdminRoute;
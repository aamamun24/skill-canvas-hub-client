import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';
import useRole from '../hooks/useRole';
import Loader from '../components/Shared/Loader';

const TeacherRoute = ({ children }) => {
    const { user, loading } = useAuth()
    const location = useLocation()
    const [role, isLoading] = useRole()

    if (loading || isLoading) {
        return <Loader />
    }

    if (user && role.role === 'teacher') {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default TeacherRoute;
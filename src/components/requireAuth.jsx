import {useLocation, Navigate, Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const RequireAuth = ({ allowedRoles }) => {
    const { auth } = useAuth()
    const location = useLocation();

    console.log(auth.roles)
    console.log(allowedRoles)
    return (
        allowedRoles?.includes(auth?.roles)
        // auth?.roles?.find(role => allowedRoles?.includes(role))
            ? <Outlet/> 
            : auth?.username
                ? <Navigate to='/unathorized' state={{from: location}} replace />
                : <Navigate to='/login' state={{from: location}} replace />
    );
}

export default RequireAuth
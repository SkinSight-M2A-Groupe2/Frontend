import { Navigate, Outlet } from "react-router-dom";

interface ProtectedRouteProps {
    user: any;
    children?: any;
    redirectPath?: string;
}

function ProtectedRoute({ user, children, redirectPath = '/' }: ProtectedRouteProps) {

    if (!user) {
        return <Navigate to={redirectPath} replace />;
    }

    return children ? children : <Outlet />;

}

export default ProtectedRoute;

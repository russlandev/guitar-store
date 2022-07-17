import React from "react";
import { useLocation, Navigate } from "react-router-dom";
import {useSelector} from 'react-redux';

const RequireAuth = ({ children }) => {
    const user = useSelector(store => store.user);
    const location = useLocation();

    if (!user.email) {
        return <Navigate to="/sign-in" state={{ from: location }} />;
    }

    return children;
};

export default RequireAuth;

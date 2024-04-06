import React, { useContext, useEffect } from 'react'
import { Data } from '../../context/DataContext';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const user = useContext(Data).USER_DATA;
    const { loading } = useContext(Data);
    // useEffect(() => {}, [user.email]);
    if (user.email == null && !loading) {
        return <Navigate to={"/login"} />;
    } else if (loading) {
        return <div>Loading</div>;
    }
    return <>{children}</>;
};

export default ProtectedRoute
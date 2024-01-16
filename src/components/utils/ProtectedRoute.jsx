import React, { useContext, useEffect } from 'react'
import { Data } from '../../context/DataContext';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({children}) => {

    const user = useContext(Data).USER_DATA;
    useEffect(()=>{

    },[user.email])
    if(user.email == null ){
        return (
            <Navigate to={'/login'}/>
        )
    }
    return (
        <>
            {children}
        </>
  )
}

export default ProtectedRoute
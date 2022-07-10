


import React from 'react'


import { useSelector } from 'react-redux/es/exports'

import { Navigate, useLocation } from "react-router-dom"

const AuthWrapper = ({ children }) => {


    const authStatus = useSelector(store => store.authReducer.auth);


    const location = useLocation(); // to trace the path of the page

    console.log("authStatus", authStatus)



    if (authStatus) {

        return children

    }



    return <Navigate to="/login" state={location} replace={true} />
}

export default AuthWrapper
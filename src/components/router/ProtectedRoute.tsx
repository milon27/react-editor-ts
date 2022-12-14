import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import URL from '../../utils/constant/URL';
import { StateContext } from '../../utils/context/MainContext';

export default function ProtectedRoute(props: {
    children: React.ReactNode
}) {
    // const { user } = useContext(StateContext);

    // send to login page if not logged in
    // console.log("ProtectedRoute", user);

    // if (user == null) {
    //     return <Navigate to={URL.HOME} />;
    // }

    return (
        <>{props.children}</>
    )
}

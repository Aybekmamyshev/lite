import React, {useContext} from 'react';
import {Navigate} from "react-router-dom";
import {CustomContext} from "../../context";

export const PrivateRouter = ({children}: any) => {

    const user = useContext(CustomContext);

    if (user?.user === null) {
        return <Navigate to={'/register'}/>
    }

    return children
};


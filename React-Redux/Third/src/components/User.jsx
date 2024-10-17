import React from 'react';
import {useLocation, useParams} from "react-router-dom";

function User() {
    const {userId} = useParams();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const name = queryParams.get('name');

    return (
        <div>
            user Id : {userId}
            user Name : {name}
        </div>
    );
}

export default User;
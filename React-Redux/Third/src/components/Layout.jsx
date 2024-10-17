import React from 'react';
import {Link, Outlet, useNavigate} from "react-router-dom";
import '../Style/Layout.css'

function Layout() {
    const navigate = useNavigate();

    return (
        <div>
            <header>
                <ul className='ul'>
                    <li>
                        <a onClick={() => navigate('/') }>Home</a>
                    </li>
                    <li>
                        <Link to="Contents">Contents</Link>
                    </li>
                    <li className='login-li'>
                        <Link to="Login">Login</Link>
                    </li>
                </ul>
            </header>
            <Outlet />
        </div>
    );
}

export default Layout;
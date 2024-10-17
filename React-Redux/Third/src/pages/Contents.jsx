import React, { useState } from 'react';
import {NavLink, Outlet} from "react-router-dom";

function Contents() {
    const [contents, setContents] = useState([
        {
            id: 1,
            content: 'content 1'
        },
        {
            id: 2,
            content: 'content 2'
        },
        {
            id: 3,
            content: 'content 3'
        }
    ]);

    return (
        <div>
            <ul>
                {
                    contents.map((item) => (
                        <li key={item.id}>
                            <NavLink to={`/contents/${item.id}?content=${item.content}`}>
                                컨텐츠 {item.id}
                            </NavLink>
                        </li>
                    ))
                }
            </ul>
            <Outlet />
        </div>
    );
}

export default Contents;

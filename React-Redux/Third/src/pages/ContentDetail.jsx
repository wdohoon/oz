import React from 'react';
import {useLocation, useParams} from "react-router-dom";

function ContentDetail() {
    const {id} = useParams();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const content = queryParams.get('content');

    return (
        <div>
            컨텐츠 id : {id}
            컨텐츠 내용 : {content}
        </div>
    );
}

export default ContentDetail;
import {Link, useSearchParams} from "react-router-dom";
import {data} from "../assets/data/data.js";
import {getRegExp} from "korean-regexp";

function Search() {

    const [searchParams] = useSearchParams();
    const params = searchParams.get("animal");
    const reg = getRegExp(params);

    const filterData = data.filter(el => el.name.match(reg));

    return (
        <ul>
            {filterData.map(el =>
                <li key={el.id}>
                    <Link to={`/detail/${el.id}`}>
                        <img src={el.img} alt={el.name}/>
                        <div>{el.name}</div>
                    </Link>
                </li>)}
        </ul>
    )
}

export default Search;
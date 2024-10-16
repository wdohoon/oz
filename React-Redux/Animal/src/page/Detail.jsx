import {useParams} from "react-router-dom";
import {data} from "../assets/data/data.js";

function Detail() {
    const params = useParams();
    const animalData = data.find((el) => el.id === Number(params.id));
    return (
        <>
            <section className="detail">
                <img src={animalData.img} alt=""/>
                <h2>{animalData.name}</h2>
                <div>{animalData.description}</div>
            </section>
        </>
    )
}

export default Detail;
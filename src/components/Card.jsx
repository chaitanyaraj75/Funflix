import { useNavigate } from "react-router-dom";
import formatDateSimple from "./changedate";

function Card(props) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/${props.type}/${props.movie.id}`);
    };
    const date = formatDateSimple(props.type == "movie" ? props.movie.release_date : props.movie.first_air_date);
    return (
        <div onClick={() => { handleClick() }} className="card-mov rounded-t-2xl cursor-pointer bg-amber-50 m-4 mr-0 w-35 h-70 overflow-hidden">
            <div className="w-full h-50 overflow-hidden">
                <img className="bg-cover w-full rounded-t-2xl" src={`https://image.tmdb.org/t/p/w342${props.movie.poster_path}`} alt="" />
            </div>
            <p className="font-baloo2 text-black p-1 text-lg/5 max-h-12 overflow-x-auto hidescrollbar">{props.type == "movie" ? props.movie.title : props.movie.name}</p>
            <p className="font-inter text-gray-500 pl-1 text-sm">{date}</p>
        </div>
    )
}

export default Card;

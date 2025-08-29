import Navigation from "./components/Navigation";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Sections from "./components/Sections";
import formatDateSimple from "./components/changedate";

function Details() {
  const { type, id } = useParams();
  const [movie, setMovie] = useState(null);
  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    async function fetchMovie() {
      try {
        const res = await fetch(`https://api.themoviedb.org/3/${type}/${id}?api_key=${apiKey}`);
        const data = await res.json();
        setMovie(data);
      } catch (err) {
        console.error("Failed to fetch movie details", err);
      }
    }

    fetchMovie();
  }, [id]);

  if (!movie) return <p className="p-4">Loading movie...</p>;

  const date = formatDateSimple(type == "movie" ? movie.release_date : movie.first_air_date);

  return (
    <div>
      <Navigation />
      <div className="relative w-full h-120">
        <img
          src={`https://image.tmdb.org/t/p/w780${movie.backdrop_path}`}
          alt={type == "movie" ? movie.title : movie.name}
          className="rounded h-120 mb-4 object-cover object-center w-full overflow-hidden"
        />
        <div className="absolute inset-0 flex h-120  ">
          <div className=" basis-4/4  flex items-center justify-center text-white bg-black opacity-50 h-120"></div>
          <div className="p-4 absolute inset-0 w-9/9 lg:w-1/2 flex flex-col justify-center text-white">
            <h1 className="font-raleway font-bold mb-2">{type == "movie" ? movie.title : movie.name}</h1>
            <p className="text-lg mb-4 font-inter">
              <strong>Release Date:</strong> {date}
            </p>
            <p className="text-lg mb-4 font-inter"><strong>Genres:</strong> {movie.genres.map(g => g.name).join(", ")}</p>
            <p className="font-inter">
              <strong>Flix Score:</strong> {movie.vote_average ? movie.vote_average.toFixed(2) : "N/A"}
            </p>
            <p className="mt-4 font-inter text-[16px]/5">{movie.overview}</p>
          </div>
        </div>
      </div>
      <div className="div">
        <Sections key={`recomended-${type}-${id}`} title={`Recomended ${type}s`} type={type} section={`${id}/recommendations`} />
      </div>
      <div className="div">
        <Sections key={`similar-${type}-${id}`} title={`Similar ${type}s`} type={type} section={`${id}/similar`} />
      </div>
    </div>
  );
}

export default Details;

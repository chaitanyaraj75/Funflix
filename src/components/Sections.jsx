import Sectionheading from "./Sectionheading"
import Card from "./Card"
import { use, useEffect, useState } from 'react'
import useFetchMovies from "./FetchMovie"

function Sections(props) {
    const [movieData, setMovies] = useState([]);
    const type= props.type || "movie";
    const section = props.section || "popular";

    const { movies, loading, error } = useFetchMovies(type + "/" + section);
    
    // if (loading) return <p className="p-2">🍿 Loading movies...</p>;
    if (error) console.warn("Using fallback movies due to error:", error);

    return (
        <>
            <Sectionheading key={0} id={0} title={props.title} />
            <div className="overflow-auto cards flex flex-wrap pr-4 justify-center lg:justify-start ">
                {movies.map(movie => {
                    return (
                        <Card key={movie.id} movie={movie} type={type} />
                    )
                })}
            </div>
        </>
    )
}

export default Sections


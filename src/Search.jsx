import Navigation from "./components/Navigation";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Card from "./components/Card";

function Search() {
    const { query } = useParams();
    const [searchResultsmovie, setSearchResultsmovie] = useState([]);
    const [searchResultstv, setSearchResultstv] = useState([]);
    const apiKey = import.meta.env.VITE_API_KEY;

    useEffect(() => {
        async function fetchMovie() {
            try {
                const res = await fetch(
                    `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`
                );
                const data = await res.json();
                setSearchResultsmovie(data.results || []);
            } catch (err) {
                console.error("Failed to fetch movie details", err);
            }
        }

        async function fetchTV() {
            try {
                const res = await fetch(
                    `https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&query=${query}`
                );
                const data = await res.json();
                setSearchResultstv(data.results || []);
            } catch (err) {
                console.error("Failed to fetch TV details", err);
            }
        }

        fetchMovie();
        fetchTV();
    }, [query]);

    return (
        <>
            <Navigation />
            <div className="flex flex-col gap-8 p-4 pt-15" style={{ backgroundImage: `url("/body-bgpng")` }}>
                <h1 className="text-2xl font-bo font-raleway">Search Results for "<em>{query}</em>"</h1>

                <div>
                    <h2 className="text-xl font-semibold mb-2 font-montserrat">🎬 Movies</h2>
                    <div className="flex flex-wrap gap-4">
                        {searchResultsmovie.length > 0 ? (
                            searchResultsmovie.map((movie) => (
                                <Card
                                    key={movie.id}
                                    type="movie"
                                    movie={movie}
                                />
                            ))
                        ) : (
                            <p className="font-qs">No movie results found.</p>
                        )}
                    </div>
                </div>

                <div>
                    <h2 className="text-xl font-semibold mb-2 font-montserrat">📺 TV Shows</h2>
                    <div className="flex flex-wrap gap-4">
                        {searchResultstv.length > 0 ? (
                            searchResultstv.map((tv) => (
                                <Card
                                    key={tv.id}
                                    type="tv"
                                    movie={tv}
                                />
                            ))
                        ) : (
                            <p className="font-qs">No TV show results found.</p>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Search;

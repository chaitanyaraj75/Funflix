import { useEffect, useState } from "react";

// Fallback in case API fails
const fallbackMovies = [
  {
    id: 1,
    title: "Spoofy Wars",
    overview: "The galaxy laughs again in this hilarious parody of space sagas.",
    release_date: "14May, 2025",
    backdrop_path: "/zIN8oKlqh7cpx6yJb9kSkqAFUJm.jpg",
    poster_path: "/8QdVzC3Yt0iKUEu3bnTGQq14pZP.jpg",
  },
  {
    id: 2,
    title: "The Fast and The Fluffy",
    overview: "Fur flies when cats race cars at ridiculous speeds.",
    release_date: "14June, 2025",
    backdrop_path: "/cZ0d3rtvXPVvuiX22sP79K3Hmjz.jpg",
    poster_path: "/6bCplVkhowCjTHXWv49UjRPn0eK.jpg",
  },
];

function useFetchMovies(endpoint) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiKey = import.meta.env.VITE_API_KEY;
  const URL = `https://api.themoviedb.org/3/${endpoint}?api_key=${apiKey}&language=en-US&page=1`;
  // const URL = `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=en-US&page=1`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(URL);
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setMovies(data.results);
      } catch (err) {
        console.error("Fetch failed:", err.message);
        setMovies(fallbackMovies);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { movies, loading, error };
}

export default useFetchMovies;

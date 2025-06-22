import { useEffect, useState } from 'react'
import './App.css'
import Navigation from './components/Navigation'
import Cover from './components/Cover'
import Sections from './components/Sections'

function Home() {
  const [count, setCount] = useState(0);
  
  return (
    <>
      <Navigation />
      <Cover />
      <Sections key="new-movies" title="New Movies" type="movie" section="now_playing" />
      <Sections key="popular-movies" title="Popular Movies" type="movie" section="popular" />
      <Sections key="new-shows" title="Ongoing Shows" type="tv" section="on_the_air" />
      <Sections key="popular-shows" title="Popular Shows" type="tv" section="popular" />
      <Sections key="top-rated-movies" title="Top Rated Movies" type="movie" section="top_rated" />
      <Sections key="top-rated-shows" title="Top Rated Shows" type="tv" section="top_rated" />
    </>
  )
}

export default Home

import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector(store=>store.movies)
  return (
    <div className=" bg-black">
      <div className="mt-0 md:-mt-30 relative z-40 sm:pl-20">
      <MovieList title = {"Up Coming"} movies = {movies.upComingMovies} />
      <MovieList title = {"Now Playing"} movies = {movies.nowPlayingMovies} />
      <MovieList title = {"Top Rated"} movies = {movies.topRatedMovies} />
      <MovieList title = {"Popular"} movies = {movies.popularMovies} />
      </div>
    </div>
  )
}

export default SecondaryContainer;
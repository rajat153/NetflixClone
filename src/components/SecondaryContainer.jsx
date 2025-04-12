import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector(store=>store.movies)
  return (
    <div className=" bg-black">
      <div className="mt-0 md:-mt-30 relative z-40 sm:pl-20">
      <MovieList title = {"Now Playing"} movies = {movies.nowPlayingMovies} />
      <MovieList title = {"Trending"} movies = {movies.nowPlayingMovies} />
      <MovieList title = {"Popular"} movies = {movies.popularMovies} />
      <MovieList title = {"Now Playing"} movies = {movies.nowPlayingMovies} />
      </div>
    </div>
  )
}

export default SecondaryContainer;
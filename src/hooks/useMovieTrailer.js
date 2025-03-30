import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_CONSTANT } from "../../utils/constants";
import { addTrailerVideo } from "../../utils/moviesSlice";

const useMoviesTrailer = (movieId) =>{

  const dispatch = useDispatch()
  const getMovieTrailer = async() => {
   const data  = await fetch (`https://thingproxy.freeboard.io/fetch/https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_CONSTANT}`);
   const json = await data.json();
   const trailer = json.results?.find((item) => item.type == 'Trailer') ?? json.results[0];
   dispatch(addTrailerVideo(trailer));
  }

  useEffect(() => {
    getMovieTrailer()
  }, [])
}

export default useMoviesTrailer;
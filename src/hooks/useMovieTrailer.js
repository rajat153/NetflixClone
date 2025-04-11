import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { liveURL, localURL } from "../../utils/url";
import { addTrailerVideo } from "../../utils/moviesSlice";

const useMoviesTrailer = (movieId) =>{

  const dispatch = useDispatch()
  const getMovieTrailer = async() => {
   const data  = await fetch(`${liveURL}/api/tmdbvideotrailer?movieId=${movieId}`, {method : 'POST'})
   const json = await data.json();
   const trailer = json.results?.find((item) => item.type == 'Trailer') ?? json.results[0];
   dispatch(addTrailerVideo(trailer));
  }

  useEffect(() => {
    getMovieTrailer()
  }, [])
}

export default useMoviesTrailer;
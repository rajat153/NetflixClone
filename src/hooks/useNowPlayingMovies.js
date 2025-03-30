
import { useDispatch } from "react-redux";
import { API_CONSTANT } from "../../utils/constants";
import  {useEffect} from 'react';
import { addNowPlayingMovies } from "../../utils/moviesSlice";


const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

    useEffect( () => {
        fetchDatawithRetry();
      }, []
    )
    
    const fetchDatawithRetry = async(retries= 3) =>{
        for(let attempt = 1; attempt <= retries; attempt++){
          try{
            let response = await fetch (`https://thingproxy.freeboard.io/fetch/https://api.themoviedb.org/3/movie/now_playing?api_key=${API_CONSTANT}&page=1`)
            if(!response.ok) throw new Error("Server error");
            const data = await response.json();
            dispatch(addNowPlayingMovies(data?.results))
            return data;
          }catch(err){
            console.error(`Attempt ${attempt} failed`, err.message)
            if(attempt === retries) throw err;
          }
        }
    }
}


export default useNowPlayingMovies;
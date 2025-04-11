
import { useDispatch } from "react-redux";
import { localURL, liveURL } from "../../utils/url";
import  {useEffect} from 'react';
import { addPopularMovies } from "../../utils/moviesSlice";


const usePopularMovies = () => {
    const dispatch = useDispatch();

    useEffect( () => {
        fetchDatawithRetry();
      }, []
    )
    
    const fetchDatawithRetry = async(retries= 3) =>{
        for(let attempt = 1; attempt <= retries; attempt++){
          try{
            let response = await fetch (`${liveURL}/api/tmdbpopularmovies`)
            if(!response.ok) throw new Error("Server error");
            const data = await response.json();
            dispatch(addPopularMovies(data?.results))
            return data;
          }catch(err){
            console.error(`Attempt ${attempt} failed`, err.message)
            if(attempt === retries) throw err;
          }
        }
    }
}


export default usePopularMovies;
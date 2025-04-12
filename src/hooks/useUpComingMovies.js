import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUpComingMovies } from '../../utils/moviesSlice';
import { liveURL } from '../../utils/url';

const useUpComingMovies = () => {
  const dispatch = useDispatch();
  const upComingMovies = useSelector(store => store.movies.upComingMovies);

  useEffect(() => {
    !upComingMovies && fetchUpComingMoviesWithRetry();
  }, []);

  const fetchUpComingMoviesWithRetry = async (retries = 3) => {
    for (let attempt = 1; attempt <= retries; attempt++) {
      try {
        const response = await fetch(`${liveURL}/api/tmdbupcomingmovies`);
        if (!response.ok) throw new Error('Server error');
        const data = await response.json();
        dispatch(addUpComingMovies(data?.results));
        return data;
      } catch (err) {
        console.error(`Attempt ${attempt} failed`, err.message);
        if (attempt === retries) throw err;
      }
    }
  };
};

export default useUpComingMovies;

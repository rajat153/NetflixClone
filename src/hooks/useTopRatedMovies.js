import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTopRatedMovies } from '../../utils/moviesSlice';
import { liveURL } from '../../utils/url';

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const topRatedMovies = useSelector(store => store.movies.topRatemMovies);

  useEffect(() => {
    !topRatedMovies && fetchTopRatedWithRetry();
  }, []);

  const fetchTopRatedWithRetry = async (retries = 3) => {
    for (let attempt = 1; attempt <= retries; attempt++) {
      try {
        const response = await fetch(`${liveURL}/api/tmdbtopratedmovies`);
        if (!response.ok) throw new Error('Server error');
        const data = await response.json();
        dispatch(addTopRatedMovies(data?.results));
        return data;
      } catch (err) {
        console.error(`Attempt ${attempt} failed`, err.message);
        if (attempt === retries) throw err;
      }
    }
  };
};

export default useTopRatedMovies;

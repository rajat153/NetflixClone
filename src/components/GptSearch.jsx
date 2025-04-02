
import GptSearchBar from './GptSearchBar';
import GptMovieCollection from './GptMovieSuggestion';
import { BACKGRND_IMG } from '../../utils/constants';

const GptSearch = () => {
  return (
    <div>
         <div className='absolute -z-10'>
            <img className ="w-screen h-screen" src={BACKGRND_IMG} alt="backround_img" />
        </div>
        <GptSearchBar/>
        <GptMovieCollection/>
    </div>
  )
}

export default GptSearch;
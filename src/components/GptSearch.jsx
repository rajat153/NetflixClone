
import GptSearchBar from './GptSearchBar';
import GptMovieCollection from './GptMovieSuggestion';
import { BACKGRND_IMG } from '../../utils/constants';

const GptSearch = () => {
  return (
    <div className='h-screen'>
      <div className='fixed -z-10'>
        <img className ="w-screen h-screen object-cover" src={BACKGRND_IMG} alt="backround_img" />
      </div>
      <div className='pt-[30%] md:p-0'>
        <GptSearchBar/>
        <GptMovieCollection/>
      </div>
    </div> 
  )
}

export default GptSearch;
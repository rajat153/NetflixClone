
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestion from './GptMovieSuggestion';
import { BACKGRND_IMG } from '../../utils/constants';

const GptSearch = () => {
  return (
    <div className='min-h-screen relative'>
      <div className='fixed inset-0 -z-10'>
        <img className ="w-screen h-screen object-cover" src={BACKGRND_IMG} alt="backround_img" />
      </div>
      <div className='pt-[30%] md:p-0'>
        <GptSearchBar/>
        <GptMovieSuggestion/>
      </div>
    </div> 
  )
}

export default GptSearch;

import lng from '../../utils/languageContext'
import { useDispatch, useSelector } from 'react-redux'
import { useRef } from 'react'  
import { GEMINIAI_KEY } from '../../utils/constants';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { localURL, liveURL } from "../../utils/url";
import { addGptMoviesResult } from '../../utils/gptSlice';
const genAI = new GoogleGenerativeAI(GEMINIAI_KEY)
const model = genAI.getGenerativeModel({model : 'gemini-2.0-flash'})


const GptSearchBar = () => {
  const dispatch = useDispatch();
  const lang = useSelector(store=>store.config.lang)
  const searchText = useRef(null)

  const searchTMDBMovies = async(movie) => {
    const data = await fetch(`${liveURL}/api/tmdbsearchmovies?movie=${movie}`, {method :'POST'})
    const json = await data.json();
    return json.results;
  }

  const handleGptSearch = async() => {
    const val = searchText.current.value;
    if(!val) return;
    const geminiQuery = "Act as movies recommendation system and suggest some movies for the query : " + val + ". only give me names of 5 movies comma separated like the example result given ahead. Example : 'Gadar' ,'Diljale', 'koi mil gaya', 'run', 'hera pheri'";
    const data = await model.generateContent(`${geminiQuery}`);
    const response = await data.response;
    const geminiMovieList = response.text().replace(/['"]/g, '').split(',');

    const promisArr = geminiMovieList.map(movie => searchTMDBMovies(movie));
    const resolveResult = await Promise.all(promisArr)
    dispatch(addGptMoviesResult({movieNames : geminiMovieList , movieResults : resolveResult}))
  }
  return (
    <div className=' pt-[20%] flex justify-center'>
        <form className='bg-black w-1/2 grid grid-cols-12' onSubmit={(e)=>e.preventDefault()}>
            <input ref={searchText} className=' bg-white p-4 m-4 col-span-9' placeholder={lng[lang].searchBarPlaceHolder}/>
            <button className='col-span-3 py-2 px-4 m-4 bg-red-700 text-white rounded-lg' onClick={handleGptSearch}>{lng[lang].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar;



import lng from '../../utils/languageContext'
import { useSelector } from 'react-redux'


const GptSearchBar = () => {
    const lang = useSelector(store=>store.config.lang)
  return (
    <div className=' pt-[20%] flex justify-center'>
        <form className='bg-black w-1/2 grid grid-cols-12'>
            <input className=' bg-white p-4 m-4 col-span-9' placeholder={lng[lang].searchBarPlaceHolder}/>
            <button className='col-span-3 py-2 px-4 m-4 bg-red-700 text-white rounded-lg'>{lng[lang].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar;


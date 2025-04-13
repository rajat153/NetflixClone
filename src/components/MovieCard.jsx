import { IMG_CONSTANT } from '../../utils/constants'

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-48 mx-4 hover:cursor-pointer hover:scale-110 hover:ease-in duration-300'>
      <img className='rounded-md' src={IMG_CONSTANT+posterPath} alt="" />
    </div>
  )
}

export default MovieCard
import { IMG_CONSTANT } from '../../utils/constants'

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-48 pr-4'>
      <img src={IMG_CONSTANT+posterPath} alt="" />
    </div>
  )
}

export default MovieCard
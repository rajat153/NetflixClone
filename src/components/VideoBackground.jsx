import { useSelector } from 'react-redux';
import useMoviesTrailer from '../hooks/useMovieTrailer';


const VideoBackground = ({movieId}) => {
 const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  useMoviesTrailer(movieId);
  return (
    <div className='w-full'>
      <iframe  className='w-full aspect-video h-[500px] md:h-[900px]'
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?&autoplay=1&mute=1&modestbranding=1&controls=0&showinfo=0&rel=0`}
        title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      >
      </iframe>
    </div>
    // <div className="w-full">
    //   <iframe
    //     className="w-full aspect-video"
    //     src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&modestbranding=1&controls=0&showinfo=0&rel=0&loop=1&playlist=${trailerVideo?.key}`}
    //     title="YouTube video player"
    //     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    //     referrerPolicy="strict-origin-when-cross-origin"
    //     allowFullScreen
    //   ></iframe>
    // </div>
    // <div className="w-full aspect-video">
    //   <iframe
    //     className="w-full h-full"
    //     src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&modestbranding=1&controls=0&showinfo=0&rel=0&loop=1&playlist=${trailerVideo?.key}`}
    //     title="YouTube video player"
    //     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    //     referrerPolicy="strict-origin-when-cross-origin"
    //     allowFullScreen
    //   />
    // </div>
  );
};

export default VideoBackground;
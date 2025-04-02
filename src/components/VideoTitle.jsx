
const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video pt-[30%] px-24 absolute bg-gradient-to-r from-black text-white'>
      <h1 className='text-3xl font-bold'>{title}</h1>
      <p className='py-2 w-2/4 text-lg'>{overview}</p>
      <button className='bg-white text-black outline-0 px-10 py-2 rounded-lg text-xl hover:opacity-80'>Play</button>
      <button className='bg-gray-400 text-white outline-0 px-10 py-2 mx-2 rounded-lg text-xl'>More Info</button>
    </div>
  )
}

export default VideoTitle;




const VideoTitle = ({title, overview}) => {
  return (
    <div className='h-[500px] md:h-[900px] w-screen aspect-video pt-[430px] sm:pt-[360px] md:pt-[350px] px-2 sm:px-24 absolute bg-gradient-to-r from-black text-white'>
      <h1 className='text-lg md:text-2xl font-bold text-center sm:text-left'>{title}</h1>
      <p className='hidden sm:line-clamp-2 md:line-clamp-none md:block py-2 w-2/4 text-lg overflow-hidden'>{overview}</p>
      <div className="flex gap-2 items-center justify-center sm:justify-start">
      <button className='bg-white text-black outline-0 px-10 py-2 rounded-lg text-xl hover:opacity-80'>Play</button>
      <button className='bg-gray-400 text-white outline-0 px-10 py-2  rounded-lg text-xl'>More Info</button>
      </div>
    </div>
  )
}

// const VideoTitle = ({ title, overview }) => {
//   return (
//     <div className="w-screen aspect-video px-2 sm:px-24 absolute bg-gradient-to-r from-black text-white flex flex-col justify-center">
//       <h1 className="text-lg md:text-3xl font-bold text-center sm:text-left">{title}</h1>
//       <p className="hidden sm:inline-block py-2 w-2/4 text-lg">{overview}</p>
//       <div className="flex gap-2 items-center justify-center sm:justify-start mt-4">
//         <button className="bg-white text-black px-10 py-2 rounded-lg text-xl hover:opacity-80">Play</button>
//         <button className="bg-gray-400 text-white px-10 py-2 rounded-lg text-xl">More Info</button>
//       </div>
//     </div>
//   );
// };

// const VideoTitle = ({ title, overview }) => {
//   return (
//     <div className="text-white px-4 sm:px-24 max-w-3xl">
//       <h1 className="text-2xl sm:text-5xl font-bold mb-4">{title}</h1>
//       <p className="text-sm sm:text-lg mb-6">{overview}</p>
//       <div className="flex gap-4">
//         <button className="bg-white text-black px-6 py-2 rounded-md text-sm sm:text-lg hover:bg-gray-300">
//           ▶️ Play
//         </button>
//         <button className="bg-gray-700 text-white px-6 py-2 rounded-md text-sm sm:text-lg hover:bg-gray-600">
//           ℹ️ More Info
//         </button>
//       </div>
//     </div>
//   );
// };

// const VideoTitle = ({ title, overview }) => {
//   return (
//     <div className="text-white max-w-[90%] sm:max-w-2xl">
//       <h1 className="text-lg sm:text-4xl font-bold mb-2 sm:mb-4">{title}</h1>
//       <p className="text-xs sm:text-base mb-4 line-clamp-4 sm:line-clamp-none">{overview}</p>
//       <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
//         <button className="bg-white text-black px-4 py-2 text-sm sm:text-lg rounded-md hover:bg-gray-300">
//           ▶️ Play
//         </button>
//         <button className="bg-gray-700 text-white px-4 py-2 text-sm sm:text-lg rounded-md hover:bg-gray-600">
//           ℹ️ More Info
//         </button>
//       </div>
//     </div>
//   );
// };

export default VideoTitle;



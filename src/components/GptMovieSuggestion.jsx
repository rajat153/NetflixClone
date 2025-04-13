import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestion = () => {
  const {movieResults, movieNames} = useSelector((store)=> store.gpt)
  if(!movieNames) return null;
  return (
    <div className="p-4 m-2 text-white bg-black opacity-80">
       {movieNames.map((movieName, index)=>{
        return <MovieList key= {movieName} title = {movieName} movies = {movieResults[index]}/>
       })} 
    </div>
  )
}

export default GptMovieSuggestion;
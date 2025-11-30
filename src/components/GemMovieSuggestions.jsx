import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GemMovieSuggestion = () => {
    const { movieNames, movieResults } = useSelector((store) => store.gem);
    if(!movieNames) return null;

    return (
        <div className="p-4 my-10 ">
            {movieNames.map((movieName, index) =>
                <MovieList key={movieName} title={movieName} movies={movieResults[index]} />)}

        </div>
    )
}

export default GemMovieSuggestion;
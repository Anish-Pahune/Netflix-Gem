import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";
import ai from "../utils/googleGenAi";
import { API_OPTIONS } from "../utils/constants";
import { addGemMovieResults } from "../utils/gemSlice";

const GemSearchBar = () => {
    const dispatch = useDispatch();
    const language = useSelector((store) => store.langConfig.lang);
    const searchText = useRef(null);

    const searchMovieTMDB = async (movie) => {
        const data = await fetch("https://api.themoviedb.org/3/search/movie?query=" +
            movie + "&include_adult=false&language=en-US&page=1", API_OPTIONS);
        
        const json = await data.json();
        return json.results;
    }

    const handleGemAiSearchClick = async () => {
        // Make an Api call to Google Gen Ai to get movie results

        const query = "Act as a movie recommendation system and suggest some movie for the query" +
            searchText.current.value +
            "Only give me names of 5 movies, comma separated";

        const genAiResults = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: query,
        });
        console.log(genAiResults.text);

        //  converts the genAiResults into an array
        const genAiMovies = genAiResults.text.split(",");

        const promiseArray = genAiMovies.map((movie) => searchMovieTMDB(movie));
        
        // map function returns quick response 
        // and the searchMovieTMDB() is an async function so it resolve the array of promise
        // that's why use Promise.all function

        const tmdbResults = await Promise.all(promiseArray);
        console.log(tmdbResults);
        dispatch(addGemMovieResults({movieNames: genAiMovies, movieResults: tmdbResults}))
    }

    return (
        <div className="w-full flex justify-center">
            <form
                className="flex w-full max-w-xl mt-44 bg-black/60 p-2 rounded-lg border border-gray-700"
                onSubmit={(e) => e.preventDefault()}
            >
                <input
                    ref={searchText}
                    type="text"
                    placeholder={lang[language].gemSearchPlaceholder}
                    className="flex-1 px-4 py-2 bg-transparent text-white placeholder-gray-400 focus:outline-none"
                />

                <button
                    className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-md transition"
                    onClick={handleGemAiSearchClick}
                >
                    {lang[language].search}
                </button>
            </form>
        </div>
    );
};

export default GemSearchBar;

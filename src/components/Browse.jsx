import { useNavigate } from "react-router-dom";
import Header from "./Header"
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/UsePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GemSearchPage from "./GemSearchPage";
import { useDispatch, useSelector } from "react-redux";
import { toogleGemSearchView } from "../utils/gemSlice"
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeLanguage } from "../utils/langConfigSlice";

const Browse = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const showGemSearch = useSelector((store) => store.gem.showGemSearch);

    // Fetching Movies
    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();

    const handleGemSearchClick = () => {
        dispatch(toogleGemSearchView());
    }

    const handleLanguageChange = (e) => {
        dispatch(changeLanguage(e.target.value));
    }

    const handleSignOut = () => {
        signOut(auth).then(() => {
        }).catch((error) => {
            navigate("/error");
        });
    }
    return (
        <div >
            <Header />
            {showGemSearch ? <GemSearchPage /> : <><MainContainer /><SecondaryContainer /></>}

            <div className="absolute mt-15 md:m-0 top-4 md:top-6 right-2 md:right-7 z-50 flex  gap-4">
                {showGemSearch && (
                    <select className="bg-red-500 md:p-2 rounded font-semibold cursor-pointer"
                            onChange={handleLanguageChange}
                    >
                        {SUPPORTED_LANGUAGES.map((lang) => (
                            <option key={lang.identifier} value={lang.identifier} className="text-black">
                                {lang.name}
                            </option>
                        ))}
                    </select>
                )}
                <button className="bg-purple-500 hover:bg-purple-700 transition md:p-2 rounded font-semibold cursor-pointer"
                        onClick={handleGemSearchClick}
                >
                    {showGemSearch ?"Homepage" : "Gem Search"}
                </button>

                <button className="bg-red-500 hover:bg-red-700 transition p-1 md:p-2 rounded font-semibold cursor-pointer"
                        onClick={handleSignOut}
                >
                    Sign Out
                </button>
            </div>
        </div>
    )
}

export default Browse;
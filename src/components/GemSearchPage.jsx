import { BG_LOGO } from "../utils/constants";
import GemMovieSuggestion from "./GemMovieSuggestions";
import GemSearchBar from "./GemSearchBar";

const GemSearchPage = () => {
    return (
        <div>
            <div className="fixed -z-10">
                <img
                    className="h-screen w-screen object-cover brightness-40"
                    src={BG_LOGO}
                    alt="bg-logo"
                />
            </div>
            <GemSearchBar />
            <GemMovieSuggestion />
        </div>
    )
}

export default GemSearchPage;
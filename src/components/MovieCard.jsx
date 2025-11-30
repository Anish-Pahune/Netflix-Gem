import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
    if (!posterPath) return null;

    return (
        <div className="mb-1 min-w-[130px] md:min-w-[180px] h-[170px] md:h-[260px] rounded-lg overflow-hidden">
            <img
                className="w-full h-full object-cover"
                src={IMG_CDN_URL + posterPath}
            />
        </div>
    )
}

export default MovieCard;
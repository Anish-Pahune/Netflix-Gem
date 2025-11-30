import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
    const trailerVideo = useSelector((store) => store.movies?.trailerVideo)

    useMovieTrailer(movieId);

    return (
        <div className="absolute inset-0 w-full h-full overflow-hidden">
            <iframe
                className="absolute top-0 left-0 w-full h-[55%]
                    md:w-[130%] md:h-[135%]
                    md:top-1/2 md:left-1/2
                    md:-translate-x-1/2 md:-translate-y-1/2
                "
                src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailerVideo?.key}`}
                allow="autoplay"
            ></iframe>


            <div className="absolute inset-0 bg-black/40"></div>
        </div>


    )
}

export default VideoBackground;
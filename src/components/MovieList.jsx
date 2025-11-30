import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
    return (
        <div className="px-2 md:px-6">
            <h1 className="text-sm md:text-xl font-bold py-3 text-white">{title}</h1>
            <div className="flex overflow-x-scroll scrollbar-hide">
                <div className="flex whitespace-nowrap gap-4">
                    {movies?.map((movie) => (
                        <MovieCard key={movie.id} posterPath={movie?.poster_path} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MovieList;
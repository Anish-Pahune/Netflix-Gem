const VideoOverview = ({ title, overview }) => {

    return (
        <section
            className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparentflex flex-col justify-center px-10 md:px-20 z-30">
            <div className="max-w-4xl mt-72 md:mt-65 drop-shadow-xl">
                <h1 className="text-2xl sm:text-5xl lg:text-6xl text-gray-300 font-extrabold">
                    {title}
                </h1>
                <p className="hidden md:inline-block mt-4 md:text-xl text-gray-400 opacity-95 leading-relaxed">
                    {overview}
                </p>
                <div className="mt-6 flex items-center gap-4">
                    <button className="flex items-center gap-2 bg-white text-black px-2 md:px-6 py-0.5 md:py-2 
                            rounded-md font-semibold hover:bg-neutral-300">
                        <svg width="17" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 3v18l15-9L5 3z" fill="currentColor" />
                        </svg>
                        Play
                    </button>
                    <button className="flex items-center gap-2 bg-white/20 border 
                        border-white/30 backdrop-blur px-1 md:px-5 py-0.5 md:py-2 rounded-md hover:bg-white/30">
                        <svg width="16" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zM11 10h2v6h-2v-6zm0-4h2v2h-2V6z"
                                fill="currentColor" />
                        </svg>
                        More Info
                    </button>
                </div>
            </div>
        </section>

    );
}

export default VideoOverview;
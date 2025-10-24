import { motion, AnimatePresence } from "framer-motion";
import { gameRoute } from "../../routes/routes";

export const GameDetails = () => {
    const game = gameRoute.useLoaderData();

    if (!game)
        return <div className="text-center text-gray-400 p-10">Loading...</div>;

    return (
        <AnimatePresence mode="wait">
            <motion.section
                key={game.id}
                layoutId={`game-${game.id}`}
                className="relative w-full h-[calc(100vh-80px)] overflow-hidden text-white"
            >
                <motion.img
                    layoutId={`game-image-${game.id}`}
                    src={game.background_image}
                    alt={game.name}
                    className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/70 to-transparent"></div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 40 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="relative z-10 h-full flex flex-col justify-end p-12 max-w-5xl"
                >
                    <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
                        {game.name}
                    </h1>

                    <div className="flex flex-wrap gap-6 text-lg text-gray-300 mb-6">
                        {game.metacritic && (
                            <span>
                                <span className="font-semibold text-white">Metacritic:</span>{" "}
                                <span
                                    className={
                                        game.metacritic >= 80
                                            ? "text-green-400"
                                            : game.metacritic >= 60
                                                ? "text-yellow-400"
                                                : "text-red-400"
                                    }
                                >
                                    {game.metacritic}
                                </span>
                            </span>
                        )}

                        {game.rating && (
                            <span>
                                ⭐ {game.rating.toFixed(1)}{" "}
                                <span className="text-gray-400 text-base">
                                    ({game.ratings_count ?? 0} reviews)
                                </span>
                            </span>
                        )}

                        {game.playtime && <span>🕓 {game.playtime}h avg playtime</span>}
                        {game.released && (
                            <span>📅 {new Date(game.released).toLocaleDateString()}</span>
                        )}
                    </div>

                    {game.description_raw && (
                        <p className="text-gray-300 text-lg leading-relaxed mb-8 line-clamp-8">
                            {game.description_raw}
                        </p>
                    )}

                    <div className="flex gap-4">
                        <button className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-lg text-white font-semibold shadow-md transition">
                            ➕ Add to Library
                        </button>
                    </div>
                </motion.div>
            </motion.section>
        </AnimatePresence>
    );
};

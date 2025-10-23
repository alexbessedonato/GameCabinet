import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Link } from "@tanstack/react-router";
import "swiper/css";
import "swiper/css/pagination";

type Game = {
    id: number | string;
    name: string;
    background_image?: string;
    metacritic?: number | null;
    rating?: number;
    ratings_count?: number;
    genres?: { name: string }[];
    playtime?: number;
    released?: string;
    description?: string;
    description_raw?: string;
};

interface GenericSwiperProps {
    data: Game[];
    className?: string;
}

export const GenericSwiper = ({ data, className = "" }: GenericSwiperProps) => {
    return (
        <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            centeredSlides
            loop
            grabCursor
            autoplay={{
                delay: 4000,
                disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            className={`w-full h-full rounded-3xl overflow-hidden ${className}`}
        >
            {data.map((game) => (
                <SwiperSlide key={game.id}>
                    <Link to="/game/$id" params={{ id: game.id.toString() }}>
                        <div className="relative w-full h-full bg-gray-900">
                            <img
                                src={game.background_image}
                                alt={game.name}
                                className="object-cover w-full h-full opacity-80"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent"></div>

                            <div className="absolute bottom-16 left-16 text-left max-w-[60%] md:max-w-[50%]">
                                <h3 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg leading-tight">
                                    {game.name}
                                </h3>

                                {game.genres && (
                                    <p className="text-lg text-gray-300 mt-2">
                                        {game.genres.slice(0, 2).map((g) => g.name).join(", ")}
                                    </p>
                                )}

                                {(game.description || game.description_raw) && (
                                    <p className="text-gray-300 text-base md:text-lg mt-4 line-clamp-3 leading-relaxed">
                                        {((game.description_raw ?? game.description) ?? "")
                                            .replace(/<[^>]*>/g, "")
                                            .slice(0, 200) + "..."}
                                    </p>
                                )}

                                <div className="flex flex-wrap gap-6 mt-6 text-lg text-gray-200">
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

                                    {game.playtime && (
                                        <span>🕓 {game.playtime}h avg playtime</span>
                                    )}

                                    {game.released && (
                                        <span>📅 {new Date(game.released).getFullYear()}</span>
                                    )}
                                </div>
                            </div>
                        </div>
                    </Link>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

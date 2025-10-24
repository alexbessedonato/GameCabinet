import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import { useNavigate } from "@tanstack/react-router";
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
    const navigate = useNavigate();

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
                    {/* 🔹 Motion wrapper */}
                    <motion.div
                        layoutId={`game-${game.id}`} // linka con GameDetails
                        onClick={() =>
                            navigate({ to: "/game/$id", params: { id: game.id.toString() } })
                        }
                        className="relative w-full h-full bg-gray-900 cursor-pointer"
                    >
                        <motion.img
                            layoutId={`game-image-${game.id}`} // linka con la imagen del detalle
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
                        </div>
                    </motion.div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

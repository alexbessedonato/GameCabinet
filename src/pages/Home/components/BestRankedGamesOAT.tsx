import { homeRoute } from "../../../routes/routes";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export function BestRankedGamesOAT() {
  const games = homeRoute.useLoaderData();

  return (
    <div className="w-full max-w-6xl mx-auto py-8">
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={20}
        centeredSlides={true}
        pagination={{ clickable: true }}
      >
        {games.map((g: any) => (
          <SwiperSlide key={g.id} style={{ width: '300px' }}>
            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <img
                src={g.background_image}
                alt={g.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-2 text-left">
                <p className="font-semibold text-white">{g.name}</p>
                <p className="text-sm text-gray-400">
                  Metacritic: {g.metacritic ?? 'N/A'}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}


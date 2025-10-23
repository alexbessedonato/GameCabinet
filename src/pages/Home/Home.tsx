import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { HeroSlide } from "./components/HeroSlide";
import { FeaturedSlide } from "./components/FeaturedSlide";
import { CTASlide } from "./components/CTASlide";

export function Home() {
  return (
    <Swiper
      direction="vertical"
      slidesPerView={1}
      mousewheel={{ forceToAxis: true }}
      pagination={{ clickable: true }}
      keyboard={{ enabled: true }}
      modules={[Mousewheel, Pagination, Keyboard]}
      className="h-screen"
    >
      <SwiperSlide>
        <HeroSlide />
      </SwiperSlide>

      <SwiperSlide>
        <FeaturedSlide />
      </SwiperSlide>

      <SwiperSlide>
        <CTASlide />
      </SwiperSlide>
    </Swiper>
  );
}

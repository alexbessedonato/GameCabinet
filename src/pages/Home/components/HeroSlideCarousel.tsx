import { homeRoute } from "../../../routes/routes";
import { GenericSwiper } from "../../../common/components/GenericSwiper/GenericSwiper";

export const HeroSlideCarousel = () => {
    const games = homeRoute.useLoaderData().topRatedYear ?? [];
    console.log(games);
    if (!games || games.length === 0) return null;

    return (
        <section className="relative w-full h-[calc(100vh-80px)] flex flex-col items-center justify-start md:px-12">
            <div className="w-full max-w-[1600px] h-[70vh] rounded-3xl overflow-hidden shadow-2xl">
                <GenericSwiper data={games} className="w-full h-full rounded-3xl" />
            </div>
        </section>

    );
};

import { HeroSlideCarousel } from "./HeroSlideCarousel.tsx";

export const HeroSlide = () => {
    return (
        <>
            <section className="p-10">
                <h2 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
                    GameVault’s Top Picks
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed ">
                    Discover the most acclaimed and trending titles of the year — handpicked
                    for true gamers.
                </p>
                <p className=" text-yellow-100 text-lg leading-relaxed mb-6">
                    Click any game discover more!
                </p>
                <HeroSlideCarousel />
            </section>
        </>
    );
};

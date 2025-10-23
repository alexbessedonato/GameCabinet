const BASE_URL = "https://api.rawg.io/api";
const API_KEY = import.meta.env.VITE_RAWG_API_KEY;

export const API_CONSTANTS = {
    RAWG_TOP_METACRITIC_GAMES: `${BASE_URL}/games?key=${API_KEY}&ordering=-metacritic&page_size=12`,

    RAWG_POPULAR_GAMES_YEAR: `${BASE_URL}/games?key=${API_KEY}&dates=2024-01-01,2024-12-31&ordering=-added&page_size=10`,

    RAWG_TOP_METACRITIC_GAMES_YEAR: `${BASE_URL}/games?key=${API_KEY}&dates=2023-01-01,2025-12-31&platforms=4,18,187,1,186,7&metacritic=70,100&ordering=-added&page_size=20`,

    // 👇 now this one is a function
    RAWG_GAME_DETAILS: (id: string | number) =>
        `${BASE_URL}/games/${id}?key=${API_KEY}`,
};

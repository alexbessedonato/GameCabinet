import {
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { App } from "../app/App";
import { Home } from "../pages/Home/Home";
import { Library } from "../pages/Library/Library";
import { Upcoming } from "../pages/Upcoming/Upcoming";
import { GameDetails } from "../pages/GameDetails/GameDetails";
import { Discovery } from "../pages/Discovery/Discovery";
import { API_CONSTANTS } from "../common/constants/api/apiConstants";

// 1️⃣ Define your route tree
export const rootRoute = createRootRoute({
  component: App,
});

export const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
  loader: async () => {
    // Fire multiple requests in parallel
    const [topMetacriticOATRes, topMetacriticyearRes,] = await Promise.all([
      fetch(API_CONSTANTS.RAWG_TOP_METACRITIC_GAMES),
      fetch(API_CONSTANTS.RAWG_TOP_METACRITIC_GAMES_YEAR),
    ]);

    const [topMetacriticOAT, topMetacriticyear] = await Promise.all([
      topMetacriticOATRes.json(),
      topMetacriticyearRes.json(),
    ]);

    // Return all the combined data as an object
    return {
      topRatedOAT: topMetacriticOAT.results,
      topRatedYear: topMetacriticyear.results,
    };
  },
});

export const libraryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/library",
  component: Library,
});

export const upcomingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/upcoming",
  component: Upcoming,
});

export const discoveryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/discovery",
  component: Discovery,
});

export const gameRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/game/$id",
  component: GameDetails,
  loader: async ({ params }) => {
    const res = await fetch(API_CONSTANTS.RAWG_GAME_DETAILS(params.id));
    return res.json();
  },
});


// 2️⃣ Create router and add routes
const routeTree = rootRoute.addChildren([homeRoute, libraryRoute, upcomingRoute, discoveryRoute, gameRoute]);

export const router = createRouter({ routeTree });

// 👇 Optional but helpful: devtools overlay
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

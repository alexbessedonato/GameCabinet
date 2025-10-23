import {
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { App } from "../app/App";
import { Home } from "../pages/Home/Home";
import { Library } from "../pages/Library/Library";
import { Upcoming } from "../pages/Upcoming/Upcoming"; 
import { Discovery } from "../pages/Discovery/Discovery"; 

// 1️⃣ Define your route tree
export const rootRoute = createRootRoute({
  component: App,
});

export const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
  loader: async() => {
    // Simulate a delay
    const res = await fetch(
      `https://api.rawg.io/api/games?key=${import.meta.env.VITE_RAWG_API_KEY}&ordering=-metacritic&page_size=12`);
    const data = await res.json()
    return data.results;
  }
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

// 2️⃣ Create router and add routes
const routeTree = rootRoute.addChildren([homeRoute, libraryRoute, upcomingRoute, discoveryRoute]);

export const router = createRouter({ routeTree });

// 👇 Optional but helpful: devtools overlay
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

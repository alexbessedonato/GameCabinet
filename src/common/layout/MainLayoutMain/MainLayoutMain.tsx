import { Outlet } from "@tanstack/react-router";

export const MainLayoutMain = () => {
  return (
    <main className="flex-1 h-full overflow-hidden text-white text-center">
      <Outlet />
    </main>
  );
};

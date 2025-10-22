import { Outlet } from "@tanstack/react-router";

export const MainLayoutMain = () => {
  return (
    <main className="bg-gray-800 text-white text-center p-4">
      <Outlet /> 
    </main>
  );
};

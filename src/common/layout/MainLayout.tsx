import { MainLayoutFooter } from "./MainLayoutFooter/MainLayoutFooter";
import { MainLayoutHeader } from "./MainLayoutHeader/MainLayoutHeader";
import { MainLayoutMain } from "./MainLayoutMain/MainLayoutMain";

export const MainLayout = () => {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-dvh bg-[url('/images/EntryFantasyGames2.png')] bg-cover bg-center bg-fixed bg-black/70 bg-blend-overlay">
      <MainLayoutHeader />
      <MainLayoutMain />
      <MainLayoutFooter />
    </div>
  );
};

import { MainLayoutFooter } from "./MainLayoutFooter/MainLayoutFooter";
import { MainLayoutHeader } from "./MainLayoutHeader/MainLayoutHeader";
import { MainLayoutMain } from "./MainLayoutMain/MainLayoutMain";
export const MainLayout = () => {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-dvh">
      <MainLayoutHeader />
      <MainLayoutMain />
      <MainLayoutFooter />
    </div>
  );
};

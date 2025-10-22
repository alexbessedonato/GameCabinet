import { NavLinks } from "./Nav/NavLinks/NavLinks";
import { NavLogo } from "./Nav/NavLogo/NavLogo";
import { NavProfile } from "./Nav/NavProfile/NavProfile";

export function MainLayoutHeader() {
  return (
    <header className="grid grid-cols-[auto_1fr_auto] items-center px-6 py-3 bg-gray-900 text-white shadow-sm">
      <NavLogo />
      <NavLinks />
      <NavProfile />
    </header>
  );
}

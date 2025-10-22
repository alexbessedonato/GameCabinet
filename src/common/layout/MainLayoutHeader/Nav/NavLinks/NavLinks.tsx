import { Navbar, NavbarLink } from "flowbite-react";

export const NavLinks = () => {
  return (
    <Navbar
      fluid
      rounded
      className="justify-self-center bg-transparent shadow-none absolute left-1/2 -translate-x-1/2 "
    >
      <ul className="flex gap-8 text-sm font-medium">
        <li>
          <NavbarLink href="#" active>
            Home
          </NavbarLink>
        </li>
        <li>
          <NavbarLink href="#">Library</NavbarLink>
        </li>
        <li>
          <NavbarLink href="#">Upcoming</NavbarLink>
        </li>
        <li>
          <NavbarLink href="#">Discover</NavbarLink>
        </li>
      </ul>
    </Navbar>
  );
};

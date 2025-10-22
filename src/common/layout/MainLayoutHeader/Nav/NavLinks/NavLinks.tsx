import { Navbar } from "flowbite-react";
import { Link } from "@tanstack/react-router";

export const NavLinks = () => {
  return (
    <Navbar
      fluid
      rounded
      className="justify-self-center bg-transparent shadow-none absolute left-1/2 -translate-x-1/2 "
    >
      <ul className="flex gap-8 text-xl font-medium">
        <li>
           <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/library">Library</Link>
        </li>
        <li>
          <Link to="/upcoming">Upcoming</Link>
        </li>
        <li>
          <Link to="/discovery">Discover</Link>
        </li>
      </ul>
    </Navbar>
  );
};

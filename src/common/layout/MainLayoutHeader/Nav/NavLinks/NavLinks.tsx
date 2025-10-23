import { Navbar } from "flowbite-react";
import { Link } from "@tanstack/react-router";

export const NavLinks = () => {
  return (
    <Navbar
      fluid
      rounded
      className="justify-self-center absolute left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur-sm rounded-md px-4 py-2 shadow-none"
    >
      <ul className="flex gap-8 text-xl font-medium text-white">
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

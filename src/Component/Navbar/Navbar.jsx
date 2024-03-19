import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/service", name: "Service" },
    { id: 4, path: "*", name: "Contact" },
  ];

  return (
    <nav className="bg-orange-400">
      <div
        className="md:hidden p-6 flex justify-end"
        onClick={() => setOpen(!open)}
      >
        {open === true ? (
          <IoClose className="text-2xl" />
        ) : (
          <AiOutlineMenuUnfold className="text-2xl " />
        )}
      </div>
      <ul
        className={`md:flex absolute  right-0 duration-700 md:static bg-orange-400 text-center px-6 w-[200px] md:w-full shadow-2xl rounded-md md:rounded-none m-2 md:m-0
      ${open ? "top-20" : "-top-64"}
      `}
      >
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

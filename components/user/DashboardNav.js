import React from "react";
import Link from "next/link";

import UserDropdown from "../shared/UserDropdown";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full z-10 bg-white border-b md:flex-row md:flex-nowrap md:justify-start  items-center p-4">
        <div className="container w-full mx-auto items-center flex justify-between md:flex-nowrap flex-wrap md:px-8 px-0">
          {/* Brand */}
          <Link href="/">
            <a
              className="text-dark text-xl font-semibold flex items-center"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              Bookey
            </a>
          </Link>

          {/* User */}
          <ul className="flex-col md:flex-row list-none items-center">
            <UserDropdown />
          </ul>
        </div>
      </nav>
      {/* End Navbar */}
    </>
  );
}

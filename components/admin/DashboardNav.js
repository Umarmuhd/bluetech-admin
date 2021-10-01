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
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 18H20M4 6H20H4ZM4 12H20H4Z"
                  stroke="#3F3F46"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
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
            <ul className="flex-col md:flex-row list-none items-center md:hidden">
              <UserDropdown />
            </ul>
          </div>

          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block rounded shadow-lg" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none md:mx-auto lg:mx-auto">
              <li className="flex items-center">
                <Link href="/admin">
                  <a className="lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-sm">
                    Overview
                  </a>
                </Link>
              </li>

              <li className="flex items-center">
                <Link href="/admin/appointments">
                  <a className="lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-sm">
                    All Bookings
                  </a>
                </Link>
              </li>

              <li className="flex items-center">
                <Link href="/admin/users">
                  <a className="lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-sm">
                    All Users
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          {/* User */}
          <ul className="flex-col md:flex-row list-none items-center hidden md:block">
            <UserDropdown />
          </ul>
        </div>
      </nav>
      {/* End Navbar */}
    </>
  );
}

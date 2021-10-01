import React, { useContext } from "react";
import { createPopper } from "@popperjs/core";
import Link from "next/link";

//context
import { AuthContext } from "@/context/AuthContext";

const UserDropdown = () => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };

  //state
  const { user, logout } = useContext(AuthContext);
  return (
    <>
      <a
        className="block"
        href="#pablo"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        <div className="flex items-center">
          <img
            src="https://avatars.dicebear.com/api/avataaars/gfhg.svg"
            alt=""
            className="flex-shrink-0 h-9 w-9 md:h-10 md:w-10 rounded-full shadow-sm border my-auto"
          />
          <span className="font-semibold ml-3 truncate hidden md:flex text-sm">
            {user.displayName}
          </span>
        </div>
      </a>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1"
        }
        style={{ minWidth: "7rem" }}
      >
        <Link href="#pablo">
          <a
            className={
              "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-left"
            }
            onClick={(e) => e.preventDefault()}
          >
            Manage account
          </a>
        </Link>
        <button
          type="button"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-left"
          }
          onClick={(e) => logout()}
        >
          Logout
        </button>

        {/* <a
          href="#pablo"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          onClick={(e) => e.preventDefault()}
        >
          Something else here
        </a>
        <div className="h-0 my-2 border border-solid border-blueGray-100" />
        <a
          href="#pablo"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          onClick={(e) => e.preventDefault()}
        >
          Seprated link
        </a> */}
      </div>
    </>
  );
};

export default UserDropdown;

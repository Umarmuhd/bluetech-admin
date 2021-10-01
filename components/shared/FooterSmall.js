import React from "react";

export default function FooterSmall(props) {
  return (
    <>
      <footer className=" w-full bottom-0 relative pb-4">
        <div className="container mx-auto px-4">
          <hr className="mb-4 border-b-1 border-blueGray-600" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4">
              <div className="text-sm text-blueGray-500 py-1 text-center md:text-left">
                <span className="mr-2">
                  Copyright © {new Date().getFullYear()}
                </span>
                <a
                  href="https://www.creative-tim.com?ref=nnjs-footer-small"
                  className="hover:text-blueGray-300 text-sm py-1"
                >
                  Teech
                </a>
              </div>
            </div>
            <div className="w-full md:w-8/12 px-4">
              <ul className="flex flex-wrap list-none md:justify-end  justify-center">
                <li>
                  <a
                    href="https://www.creative-tim.com?ref=nnjs-footer-small"
                    className="hover:text-blueGray-300 text-sm block py-1 px-3"
                  >
                    Creative Tim
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.creative-tim.com/presentation?ref=nnjs-footer-small"
                    className="hover:text-blueGray-300 text-sm block py-1 px-3"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="http://blog.creative-tim.com?ref=nnjs-footer-small"
                    className="hover:text-blueGray-300 text-sm block py-1 px-3"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/creativetimofficial/notus-nextjs/blob/main/LICENSE.md?ref=nnjs-footer-small"
                    className="hover:text-blueGray-300 text-sm block py-1 px-3"
                  >
                    MIT License
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

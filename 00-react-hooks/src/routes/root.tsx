import { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
export default function Root() {
  const [isOpen, setOpen] = useState(false);

  const handleDropDown = () => {
    setOpen(!isOpen);
  };
  // const routes = [];
  return (
    <>
      <div className="block text-center	">
        {/* <h1 className="text-4xl text-center	"></h1> */}
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
          <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
            <NavLink
              to="/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img src="/react-hooks-logo.svg" className="h-8 " alt="Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                React Hooks 101
              </span>
            </NavLink>
            <button
              data-collapse-toggle="navbar-dropdown"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            {/* id="navbar-default" */}
            <div
              className="hidden w-full md:block md:w-auto"
              id="navbar-dropdown"
            >
              <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <NavLink
                    to={`/use-state/`}
                    className={({ isActive }) => {
                      return isActive
                        ? "text-primary block py-2 px-3 bg-blue-700 rounded md:bg-transparent"
                        : "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent";
                    }}
                    aria-current="page"
                  >
                    UseState
                  </NavLink>
                </li>

                <li className="text-primary block py-2 px-3 bg-blue-700 rounded md:bg-transparent  ">
                  <button
                    onClick={handleDropDown}
                    id="dropdownNavbarLink"
                    data-dropdown-toggle="dropdownNavbar"
                    className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                  >
                    useEffect{" "}
                    <svg
                      className="w-2.5 h-2.5 ms-2.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 4 4 4-4"
                      />
                    </svg>
                  </button>
                  {/* <!-- Dropdown menu --> */}
                  <div
                    id="dropdownNavbar"
                    className={`z-10 w-44 rounded divide-y divide-gray-100 absolute top-16 shadow font-normal divide-y rounded-lg  border-gray-200 dark:bg-gray-900 ${
                      isOpen ? "visible" : "hidden"
                    }`}
                  >
                    <ul
                      className="py-2 text-sm text-gray-700 dark:text-gray-400"
                      aria-labelledby="dropdownLargeButton"
                    >
                      <li>
                        <NavLink
                          to={`/use-effect-basic`}
                          className={({ isActive }) => {
                            return isActive
                              ? "text-primary block py-2 px-3 bg-blue-700 rounded md:bg-transparent  "
                              : "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent  ";
                          }}
                          aria-current="page"
                        >
                          UseEffect Basic
                        </NavLink>
                      </li>

                      <li>
                        <NavLink
                          to={`/use-effect-mouse`}
                          className={({ isActive }) => {
                            return isActive
                              ? "text-primary block py-2 px-3 bg-blue-700 rounded md:bg-transparent  "
                              : "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent  ";
                          }}
                          aria-current="page"
                        >
                          UseEffect Mouse
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to={`/use-effect-mouse`}
                          className={({ isActive }) => {
                            return isActive
                              ? "text-primary block py-2 px-3 bg-blue-700 rounded md:bg-transparent  "
                              : "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent  ";
                          }}
                          aria-current="page"
                        >
                          UseEffect Mouse
                        </NavLink>
                      </li>
                      {/* <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                  </li> */}
                    </ul>
                    {/* <div className="py-1">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                </div> */}
                  </div>
                </li>

                {/* <li>
                  <NavLink
                    to={`/use-effect-mouse`}
                    className={({ isActive }) => {
                      return isActive
                        ? "text-primary block py-2 px-3 bg-blue-700 rounded md:bg-transparent  "
                        : "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent  ";
                    }}
                    aria-current="page"
                  >
                    UseEffect Mouse
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={`/use-effect-mouse`}
                    className={({ isActive }) => {
                      return isActive
                        ? "text-primary block py-2 px-3 bg-blue-700 rounded md:bg-transparent  "
                        : "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent  ";
                    }}
                    aria-current="page"
                  >
                    UseEffect Mouse
                  </NavLink>
                </li> */}
                {/* <li>
                  <NavLink
                    to={`/use-effect-mouse`}
                    aria-current="page"
                    className={({ isActive }) => {
                      return isActive
                        ? "text-primary block py-2 px-3 bg-blue-700 rounded md:bg-transparent  "
                        : "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent  ";
                    }}
                  >
                    UseEffect Mouse
                  </NavLink>
                </li> */}
              </ul>
            </div>
          </div>
        </nav>

        <Outlet />
      </div>
      {/* <div id="detail"></div> */}
    </>
  );
}

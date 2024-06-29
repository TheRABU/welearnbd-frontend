import { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import UserDropdown from "./UserDropdown";
import Logo from "../../../public/logo.avif";
const FloatingNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logOut } = useAuth();
  return (
    <header className="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-gray-100 bg-white/80 py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg 2xl:max-w-screen-2xl">
      <div className="px-4">
        <div className="flex items-center justify-between">
          <div className="flex shrink-0">
            <Link
              aria-current="page"
              className="hidden lg:flex items-center"
              to="/"
            >
              <img
                className="h-14 w-auto"
                src="https://www.svgrepo.com/show/452102/slack.svg"
                alt=""
              />
              <p className="sr-only">WeLearnBD</p>
            </Link>
            {/* Mobile menu button */}
            <div className="flex lg:hidden">
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
                aria-label="toggle menu"
              >
                {!isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 8h16M4 16h16"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
            {isOpen ? (
              <div className="flex flex-col items-center absolute top-12 z-[10] my-5 p-2 mx-auto h-auto w-56 rounded-md bg-[#260C1A]">
                <div className="flex flex-col py-3 w-full">
                  <Link className="bg-[#FEFAF6] text-black mt-2 px-5 py-2 rounded-lg">
                    ALi baba
                  </Link>
                  <Link className="bg-white text-black mt-2 px-5 py-2 rounded-lg">
                    ALi baba 2
                  </Link>
                  <Link className="bg-white text-black mt-2 px-5 py-2 rounded-lg">
                    ALi baba 3
                  </Link>
                  <Link className="bg-white text-black mt-2 px-5 py-2 rounded-lg">
                    ALi baba 4
                  </Link>
                  <Link className="bg-white text-black mt-2 px-5 py-2 rounded-lg">
                    ALi baba 5
                  </Link>
                </div>
              </div>
            ) : (
              <> </>
            )}
          </div>

          <div className="hidden md:flex md:items-center md:justify-center md:gap-5">
            <Link
              aria-current="page"
              className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
              to="/"
            >
              Home
            </Link>
            <Link
              className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
              to="/allCourses"
            >
              All Courses
            </Link>
            <Link
              className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
              to="/joinTeacher"
            >
              Join as a Teacher
            </Link>
          </div>
          <div className="flex items-center justify-end gap-3">
            <UserDropdown />
            <Link
              className="hidden items-center justify-center rounded-xl bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-all duration-150 hover:bg-gray-50 sm:inline-flex"
              to="/signUp"
            >
              Sign up
            </Link>
            <Link
              className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              to="/login"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default FloatingNav;

import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast, { Toaster } from "react-hot-toast";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { FcHome } from "react-icons/fc";
import { MdPayment } from "react-icons/md";
import { FcInfo } from "react-icons/fc";
import { FaCartArrowDown } from "react-icons/fa6";
import { HiAcademicCap } from "react-icons/hi";
const LeftSideUserBar = () => {
  const { user, logOut } = useAuth();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Logged Out successfully");
      })
      .catch();
  };
  return (
    <>
      <aside className="flex flex-col h-full px-5 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l ">
        <Link to="/">
          <img
            className="w-auto h-7"
            src="https://merakiui.com/images/logo.svg"
            alt=""
          />
        </Link>

        <div className="flex flex-col justify-between flex-1 mt-6">
          <nav className="flex-1 -mx-3 space-y-3 ">
            <Link
              className="flex items-center justify-start gap-x-3 ml-3 text-neutral-600"
              to="/"
            >
              <FcHome className="text-xl" />
              Home
            </Link>

            <Link
              className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg  hover:bg-gray-100   hover:text-gray-700"
              to="/createCourse"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
                />
              </svg>

              <span className="mx-2 text-sm font-medium">
                Create new Course
              </span>
            </Link>
            <Link
              className="flex items-center justify-start gap-x-3 ml-3"
              to="/myPaymentHistory"
            >
              <MdPayment className="text-xl" />
              My payment history
            </Link>
            <Link
              className="flex items-center justify-start gap-x-3 ml-3"
              to="/myCart"
            >
              <FaCartArrowDown className="text-xl" />
              My Cart
            </Link>
            <Link
              className="flex items-center justify-start gap-x-3 ml-3"
              to="/myRequest"
            >
              <FcInfo className="text-xl" />
              My teaching status
            </Link>
            <Link
              className="flex items-center justify-start gap-x-3 ml-3"
              to="/myPublishedCourses"
            >
              <HiAcademicCap className="text-xl" />
              My published courses
            </Link>
          </nav>

          <div className="mt-6">
            <div className="p-3 bg-gray-100 rounded-lg ">
              <h2 className="text-sm font-medium text-gray-800 ">
                New feature availabel!
              </h2>

              <p className="mt-1 text-xs text-gray-500 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                harum officia eligendi velit.
              </p>

              <img
                className="object-cover w-full h-32 mt-2 rounded-lg"
                src="https://images.unsplash.com/photo-1658953229664-e8d5ebd039ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&h=1374&q=80"
                alt=""
              />
            </div>

            <div className="flex items-center justify-between mt-6">
              <a href="#" className="flex items-center gap-x-2">
                {user ? (
                  <img
                    className="object-cover rounded-full h-7 w-7"
                    src={user.photoURL}
                    alt="avatar"
                  />
                ) : (
                  <img
                    className="object-cover rounded-full h-7 w-7"
                    src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&h=634&q=80"
                    alt="avatar"
                  />
                )}
                {user ? (
                  <span className="text-sm font-medium text-gray-700 ">
                    {user?.displayName}
                  </span>
                ) : (
                  <span className="text-sm font-medium text-gray-700 ">
                    Rabu is only admin
                  </span>
                )}
              </a>

              <Link
                onClick={handleLogOut}
                className="text-gray-500 transition-colors duration-200 rotate-180  rtl:rotate-0 hover:text-blue-500 "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <Toaster position="top-center" reverseOrder={false} />
      </aside>
    </>
  );
};

export default LeftSideUserBar;

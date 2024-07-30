import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import { FcHome } from "react-icons/fc";
import { MdPayment } from "react-icons/md";
import { FcInfo } from "react-icons/fc";
import { FaCartArrowDown } from "react-icons/fa6";
import { HiAcademicCap } from "react-icons/hi";
import { FcInspection } from "react-icons/fc";
import { FcManager } from "react-icons/fc";
import { FcAutomatic } from "react-icons/fc";
import { FaCodePullRequest } from "react-icons/fa6";
import useAdmin from "../../hooks/useAdmin";
const MobileLeftSideBar = () => {
  const { user, logOut } = useAuth();

  const [isAdmin] = useAdmin();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Logged Out successfully");
      })
      .catch((error) => console.log(error.message));
  };
  return (
    <>
      <aside className="flex flex-col items-center w-24 h-screen py-8 overflow-y-auto bg-white border-r rtl:border-l rtl:border-r-0 ">
        <nav className="flex flex-col flex-1 space-y-6">
          <Link to="/">
            <img
              className="w-auto h-6 "
              src="https://merakiui.com/images/logo.svg"
              alt=""
            />
          </Link>
          {/* USER LINKS */}
          <div data-tip="Home" className="tooltip">
            <Link to="/">
              <FcHome className="text-4xl p-1.5 text-gray-700 focus:outline-nones transition-colors duration-200 rounded-lg hover:bg-gray-100" />
            </Link>
          </div>

          <div data-tip="Create Course" className="tooltip">
            <Link to="/createCourse">
              <FcInspection className="text-4xl p-1.5 text-gray-700 focus:outline-nones transition-colors duration-200 rounded-lg hover:bg-gray-100" />
            </Link>
          </div>
          <div data-tip="Payment History" className="tooltip">
            <Link to="/myPaymentHistory">
              <MdPayment className="text-4xl p-1.5 text-gray-700 focus:outline-nones transition-colors duration-200 rounded-lg hover:bg-gray-100" />
            </Link>
          </div>
          <div data-tip="Cart" className="tooltip">
            <Link to="/myCart">
              <FaCartArrowDown className="text-4xl p-1.5 text-gray-700 focus:outline-nones transition-colors duration-200 rounded-lg hover:bg-gray-100" />
            </Link>
          </div>
          <div data-tip="My Request" className="tooltip">
            <Link to="/myRequest">
              <FcInfo className="text-4xl p-1.5 text-gray-700 focus:outline-nones transition-colors duration-200 rounded-lg hover:bg-gray-100" />
            </Link>
          </div>
          <div data-tip="My Courses" className="tooltip">
            <Link to="/myPublishedCourses">
              <HiAcademicCap className="text-4xl p-1.5 text-gray-700 focus:outline-nones transition-colors duration-200 rounded-lg hover:bg-gray-100" />
            </Link>
          </div>
          <hr />
          {isAdmin && (
            <>
              <div data-tip="Users" className="tooltip">
                <Link to="/admin/showAllUsers">
                  <FcManager className="text-4xl p-1.5 text-gray-700 focus:outline-nones transition-colors duration-200 rounded-lg hover:bg-gray-100" />
                </Link>
              </div>
              <div data-tip="Approved requests" className="tooltip">
                <Link to="/admin/approved-requests">
                  <FcAutomatic className="text-4xl p-1.5 text-gray-700 focus:outline-nones transition-colors duration-200 rounded-lg hover:bg-gray-100" />
                </Link>
              </div>
              <div data-tip="Teacher Request" className="tooltip">
                <Link to="/admin/requests">
                  <FaCodePullRequest className="text-4xl p-1.5 text-gray-700 focus:outline-nones transition-colors duration-200 rounded-lg hover:bg-gray-100" />
                </Link>
              </div>
            </>
          )}
        </nav>

        <div className="flex flex-col space-y-6">
          <hr />
          <div>
            {user?.photoURL ? (
              <img
                className="object-cover w-8 h-8 rounded-full"
                src={user.photoURL}
                alt=""
              />
            ) : (
              <img
                className="object-cover w-8 h-8 rounded-full"
                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=880&h=880&q=100"
                alt=""
              />
            )}
          </div>
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
      </aside>
    </>
  );
};

export default MobileLeftSideBar;

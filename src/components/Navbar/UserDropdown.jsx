import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import useAuth from "../../hooks/useAuth";
import toast, { Toaster } from "react-hot-toast";
import { FaCartArrowDown } from "react-icons/fa";
import useCart from "../../hooks/useCartHook";
import useAdmin from "../../hooks/useAdmin";

const UserDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useContext(AuthContext) || {};
  const [cart] = useCart();
  const [isAdmin] = useAdmin();

  const { logOut } = useAuth();
  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Logged Out successfully");
      })
      .catch();
  };
  // console.log("isadmin:", isAdmin);
  return (
    <div className="relative inline-block">
      {/* Dropdown toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center focus:outline-none"
      >
        <div className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
          {user?.photoURL ? (
            <img
              className="object-cover w-full h-full"
              src={user.photoURL}
              alt="user photo"
            />
          ) : (
            <img
              src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
              className="object-cover w-full h-full"
              alt="user photo"
            />
          )}
        </div>
      </button>

      {/* Dropdown menu */}
      {/* {isOpen && (
        <div
          className="absolute -right-30 lg:right-0 z-20 w-48 py-2 mt-2 origin-top-right bg-white rounded-md shadow-xl"
          onMouseLeave={() => setIsOpen(false)}
        >
          <Link
            to="/myPublishedCourses"
            className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform hover:bg-gray-100"
          >
            My courses
          </Link>
          <Link to="/myCart">
            <div className="badge badge-secondary">
              My Cart
              <FaCartArrowDown className="mr-2" />+ {cart.length}
            </div>
          </Link>
          <Link
            to="/createCourse"
            className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform hover:bg-gray-100"
          >
            Create Course
          </Link>
          <Link
            to="/myRequest"
            className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform hover:bg-gray-100"
          >
            My teacher request
          </Link>
          <Link
            to="/myPaymentHistory"
            className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform hover:bg-gray-100"
          >
            My purchased courses
          </Link>
          <hr className="border-gray-200" />
          <Link
            to="/dashboard"
            className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform hover:bg-gray-100"
          >
            Dashboard
          </Link>

          <hr className="border-gray-200" />

          <Link
            onClick={handleLogOut}
            className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform hover:bg-gray-100"
          >
            Sign Out
          </Link>
        </div>
      )} */}

      {isOpen && isAdmin ? (
        <div
          className="absolute -right-30 lg:right-0 z-20 w-48 py-2 mt-2 origin-top-right bg-white rounded-md shadow-xl"
          onMouseLeave={() => setIsOpen(false)}
        >
          <Link
            to="/admin/requests"
            className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform hover:bg-gray-100"
          >
            Teacher Requests
          </Link>
          <Link to="/myCart">
            <div className="badge badge-secondary">
              My Cart
              <FaCartArrowDown className="mr-2" />+ {cart.length}
            </div>
          </Link>
          <Link
            to="/admin/approved-requests"
            className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform hover:bg-gray-100"
          >
            Approved teacher requests
          </Link>
          <Link
            to="/admin/showAllUsers"
            className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform hover:bg-gray-100"
          >
            Show all users
          </Link>

          <hr className="border-gray-200" />
          <Link
            to="/myPublishedCourses"
            className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform hover:bg-gray-100"
          >
            My courses
          </Link>

          <Link
            to="/createCourse"
            className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform hover:bg-gray-100"
          >
            Create Course
          </Link>
          <Link
            to="/myRequest"
            className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform hover:bg-gray-100"
          >
            My teacher request
          </Link>
          <Link
            to="/myPaymentHistory"
            className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform hover:bg-gray-100"
          >
            My purchased courses
          </Link>
          <Link
            onClick={handleLogOut}
            className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform hover:bg-gray-100"
          >
            Sign Out
          </Link>
        </div>
      ) : (
        isOpen && (
          <div
            className="absolute -right-30 lg:right-0 z-20 w-48 py-2 mt-2 origin-top-right bg-white rounded-md shadow-xl"
            onMouseLeave={() => setIsOpen(false)}
          >
            <Link
              to="/myPublishedCourses"
              className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform hover:bg-gray-100"
            >
              My courses
            </Link>
            <Link to="/myCart">
              <div className="badge badge-secondary">
                My Cart
                <FaCartArrowDown className="mr-2" />+ {cart.length}
              </div>
            </Link>
            <Link
              to="/createCourse"
              className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform hover:bg-gray-100"
            >
              Create Course
            </Link>
            <Link
              to="/myRequest"
              className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform hover:bg-gray-100"
            >
              My teacher request
            </Link>
            <Link
              to="/myPaymentHistory"
              className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform hover:bg-gray-100"
            >
              My purchased courses
            </Link>
            <hr className="border-gray-200" />
            <Link
              to="/dashboard"
              className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform hover:bg-gray-100"
            >
              Dashboard
            </Link>

            <hr className="border-gray-200" />

            <Link
              onClick={handleLogOut}
              className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform hover:bg-gray-100"
            >
              Sign Out
            </Link>
          </div>
        )
      )}

      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default UserDropdown;

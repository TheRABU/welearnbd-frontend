import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import useAuth from "../../hooks/useAuth";
import toast, { Toaster } from "react-hot-toast";

const UserDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useContext(AuthContext) || {};
  const { logOut } = useAuth();
  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Logged Out successfully");
      })
      .catch();
  };
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
              alt="avatar"
            />
          )}
        </div>
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div
          className="absolute -right-30 lg:right-0 z-20 w-48 py-2 mt-2 origin-top-right bg-white rounded-md shadow-xl"
          onMouseLeave={() => setIsOpen(false)}
        >
          <Link
            to="/my-requests"
            className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform hover:bg-gray-100"
          >
            My courses
          </Link>

          <Link
            to="/request"
            className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform hover:bg-gray-100"
          >
            Enroll a new Course
          </Link>
          <Link
            to="/my-orders"
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
      )}
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default UserDropdown;

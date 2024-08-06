import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
import { Link, useNavigate } from "react-router-dom";

import { IoHomeOutline } from "react-icons/io5";
import { HiUsers } from "react-icons/hi2";
import { TbUsersPlus as TeacherReq } from "react-icons/tb";
import { FiLogOut as LogoutIcon } from "react-icons/fi";
import toast from "react-hot-toast";

const AdminDashBrd = () => {
  const { user, logOut } = useAuth();
  const axiosSecure = useAxiosPrivate();
  const navigate = useNavigate();
  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Logged Out successfully");
        navigate("/");
      })
      .catch();
  };
  //   useEffect(() => {
  //     fetch(`${import.meta.env.VITE_API_URL}/api/v1/admin/showStats`)
  //       .then((res) => res.json())
  //       .then((data) => console.log("Total response from backend", data));
  //   }, []);

  const {
    data: stats = {},
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["admin-stats"],
    enabled: true,
    staleTime: 10000, // 10 seconds - prevents excessive refetching
    refetchOnWindowFocus: false,
    queryFn: async () => {
      const res = await axiosSecure.get("/api/v1/admin/showStats");
      return res.data;
    },
  });

  if (isError) {
    console.error("An error occurred:", error);
  }

  return (
    <>
      <div>
        {isLoading ? (
          <div className="card rounded-[12px] m-10 text-xl shadow-2xl p-5 animate-pulse">
            <a href="#">
              <div className="w-full h-64 bg-gray-200 rounded mb-3"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
              <div className="h-1 bg-gray-200 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-1/4"></div>
            </a>
          </div>
        ) : (
          <div className="bg-orange-100 min-h-screen">
            <div className="fixed bg-white text-blue-800 px-10 py-1 z-10 w-full">
              <div className="flex items-center justify-between py-2 text-5x1">
                <div className="font-bold text-blue-900 text-xl">
                  Admin<span className="text-orange-600">Panel</span>
                  <div>
                    <h2 className="text-2xl text-center font-semibold text-neutral-700">
                      Hi there, Welcome back sir{" "}
                      <span className="font-semibold text-neutral-900">
                        {user?.displayName}
                      </span>
                    </h2>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row pt-12 md:pt-24 px-4 sm:px-6 md:px-10 pb-4">
              <div className="w-full md:w-3/12 lg:w-2/12 mr-0 md:mr-6 mb-6 md:mb-0">
                <div className="bg-white rounded-xl shadow-lg mb-6 px-4 sm:px-6 py-4">
                  <Link
                    to="/admin/dashboard"
                    className="inline-block text-gray-600 hover:text-black my-4 w-full"
                  >
                    <IoHomeOutline className="text-2xl lg:text-4xl" />
                    <span className="hidden lg:block">Dashboard</span>
                  </Link>
                  <Link
                    to="/admin/showAllUsers"
                    className="inline-block text-gray-600 hover:text-black my-4 w-full"
                  >
                    <HiUsers className="text-2xl lg:text-4xl" />
                    <span className="hidden lg:block">Show users</span>
                  </Link>
                  <Link
                    to="/admin/requests"
                    className="inline-block text-gray-600 hover:text-black my-4 w-full"
                  >
                    <TeacherReq className="text-2xl lg:text-4xl" />
                    <span className="hidden lg:block">Teacher requests</span>
                  </Link>
                </div>

                <div className="bg-white rounded-xl shadow-lg px-4 sm:px-6 py-4">
                  <Link
                    to="/myCart"
                    className="inline-block text-gray-600 hover:text-black my-4 w-full"
                  >
                    <span className="text-md">My Cart</span>
                  </Link>
                  <Link
                    to="/myPaymentHistory"
                    className="inline-block text-gray-600 hover:text-black my-4 w-full"
                  >
                    <span className="text-md">My payment history</span>
                  </Link>
                  <Link
                    to="/myPublishedCourses"
                    className="inline-block text-gray-600 hover:text-black my-4 w-full"
                  >
                    <span className="text-md">My published courses</span>
                  </Link>
                  <div>
                    <button onClick={handleLogOut} className="btn bg-red-400">
                      <LogoutIcon />
                    </button>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-9/12 ">
                <div className="flex flex-col lg:flex-row">
                  <div
                    className="bg-no-repeat bg-red-200 border border-red-300 rounded-xl w-full lg:w-7/12 mb-4 lg:mb-0 lg:mr-2 p-4 sm:p-6"
                    style={{
                      backgroundImage:
                        "url(https://previews.dropbox.com/p/thumb/AAvyFru8elv-S19NMGkQcztLLpDd6Y6VVVMqKhwISfNEpqV59iR5sJaPD4VTrz8ExV7WU9ryYPIUW8Gk2JmEm03OLBE2zAeQ3i7sjFx80O-7skVlsmlm0qRT0n7z9t07jU_E9KafA9l4rz68MsaZPazbDKBdcvEEEQPPc3TmZDsIhes1U-Z0YsH0uc2RSqEb0b83A1GNRo86e-8TbEoNqyX0gxBG-14Tawn0sZWLo5Iv96X-x10kVauME-Mc9HGS5G4h_26P2oHhiZ3SEgj6jW0KlEnsh2H_yTego0grbhdcN1Yjd_rLpyHUt5XhXHJwoqyJ_ylwvZD9-dRLgi_fM_7j/p.png?fv_content=true&size_mode=5)",
                      backgroundPosition: "90% center",
                    }}
                  >
                    <p className="text-2xl lg:text-5xl text-indigo-900">
                      Total <br />
                      <strong>Users are: {stats.users}</strong>
                    </p>
                    <div className="w-2/6">
                      <img
                        className="object-cover w-full h-full rounded-2xl"
                        src="https://img.freepik.com/free-vector/user-follower-icons-social-media-notification-icon-speech-bubbles-vector-illustration_56104-847.jpg?t=st=1722541090~exp=1722544690~hmac=3621a813a0e40afec3fac0dc85d0be072153c5f4d6f99663372764c0f0ec1af9&w=740"
                        alt=""
                      />
                    </div>
                    <Link
                      to="/admin/showAllUsers"
                      className="flex items-center justify-center w-full lg:w-4/6 px-4 py-4 mt-4 lg:mt-8 text-sm lg:text-base font-medium leading-6 text-gray-500 whitespace-no-wrap bg-white border-2 border-transparent rounded-full shadow-sm hover:bg-transparent hover:text-white hover:border-white focus:outline-none"
                    >
                      All users
                    </Link>
                  </div>

                  <div
                    className="bg-no-repeat bg-orange-200 border border-orange-300 rounded-xl w-full lg:w-5/12 mt-4 lg:mt-0 p-4 sm:p-6"
                    style={{
                      backgroundImage:
                        "url(https://previews.dropbox.com/p/thumb/AAuwpqWfUgs9aC5lRoM_f-yi7OPV4txbpW1makBEj5l21sDbEGYsrC9sb6bwUFXTSsekeka5xb7_IHCdyM4p9XCUaoUjpaTSlKK99S_k4L5PIspjqKkiWoaUYiAeQIdnaUvZJlgAGVUEJoy-1PA9i6Jj0GHQTrF_h9MVEnCyPQ-kg4_p7kZ8Yk0TMTL7XDx4jGJFkz75geOdOklKT3GqY9U9JtxxvRRyo1Un8hOObbWQBS1eYE-MowAI5rNqHCE_e-44yXKY6AKJocLPXz_U4xp87K4mVGehFKC6dgk_i5Ur7gspuD7gRBDvd0sanJ9Ybr_6s2hZhrpad-2WFwWqSNkh/p.png?fv_content=true&size_mode=5)",
                      backgroundPosition: "100% 40%",
                    }}
                  >
                    <p className="text-2xl lg:text-4xl text-indigo-900">
                      Teacher Requests:
                      <strong className="ml-0 lg:ml-1">{stats.teachers}</strong>
                      <div className="w-3/6 mt-3">
                        <img
                          className="object-cover w-full h-full rounded-2xl"
                          src="https://img.freepik.com/free-vector/businessman-working-laptop-computer-office-3d-character-isolated-white-background_40876-3756.jpg?t=st=1722540648~exp=1722544248~hmac=fff6486118779efb45de9be86eefb2ed2da95a19ed6e0e1336b56cd8112c8b4b&w=740"
                          alt=""
                        />
                      </div>
                    </p>
                    <Link
                      to="/admin/requests"
                      className="flex items-center justify-center px-4 py-4 mt-4 lg:mt-8 text-sm lg:text-base font-medium leading-6 text-gray-500 whitespace-no-wrap bg-white border-2 border-transparent rounded-full shadow-sm hover:bg-transparent hover:text-white hover:border-white focus:outline-none"
                    >
                      Teacher requests
                    </Link>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row h-auto md:h-64 mt-6">
                  <div className="bg-blue-400 rounded-xl shadow-lg px-4 sm:px-6 py-4 mb-4 md:mb-0 w-full md:w-4/12">
                    Orders: {stats.orders}
                  </div>
                  <div className="bg-white rounded-xl shadow-lg px-4 sm:px-6 py-4 mb-4 md:mb-0 md:mx-6 w-full md:w-4/12">
                    Courses: {stats.products}
                  </div>
                  <div className="bg-white rounded-xl shadow-lg px-4 sm:px-6 py-4 w-full md:w-4/12">
                    Revenue: ${stats.revenue}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default AdminDashBrd;

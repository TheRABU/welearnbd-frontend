import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Homepage/Home";
import AllCoursePage from "../pages/AllCoursespage/AllCoursePage";
import JoinTeacherPage from "../pages/JoinTeacherPage/JoinTeacherPage";
import Coursedetails from "../pages/CourseDetailspage/Coursedetails";
import SignUp from "../pages/SignUppage/SignUp";
import Login from "../pages/Loginpage/Login";
import SignUpLayout from "../layouts/SignUpLayout";
import useAuth from "../hooks/useAuth";
import VerifyAccount from "../pages/SignUppage/Verify";

import Enroll from "../pages/EnrollNowPage/EnrollPage";
import AdminLayout from "../layouts/AdminLayout";
import ApproveReq from "../pages/Admin/ApproveRequests/ApproveReq";
import ApprovedReq from "../pages/Admin/ApprovedRequests/ApprovedRequests";
import UserLayout from "../layouts/UserLayout";
import MyTeacherReq from "../pages/User/UserSubmittedRequests/MyTeacherRequest";
import PrivateRoute from "./PrivateRoute";
import CreateNewCourse from "../pages/User/UserCreateCourse/CreateCourse";
import PaymentPage from "../pages/Payment/PaymentPage";
import MyCart from "../pages/User/MyCart/MyCart";

/* 
TODO: make the courseDetails page private
*/

const AllRoutesFunc = () => {
  const { user } = useAuth();

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/allCourses",
          element: <AllCoursePage />,
        },
        {
          path: "/courseDetail/:id",
          element: <Coursedetails />,
        },
        {
          path: "/joinTeacher",
          element: <JoinTeacherPage />,
        },
        {
          path: "/checkout/:id",
          element: <PaymentPage />,
          loader: ({ params }) =>
            fetch(
              `${import.meta.env.VITE_API_URL}/api/v1/courses/${params.id}`
            ),
        },
      ],
    },
    {
      path: "/",
      element: <SignUpLayout />,
      children: [
        {
          path: "/signUp",
          element: !user ? <SignUp /> : <Navigate to="/" />,
        },
        {
          path: "/verify/:token",
          element: !user ? <VerifyAccount /> : <Navigate to="/" />,
        },
        {
          path: "/login",
          element: !user ? <Login /> : <Navigate to="/" />,
        },
        {
          path: "/enroll/:id",
          element: <Enroll />,
          loader: ({ params }) =>
            fetch(
              `${import.meta.env.VITE_API_URL}/api/v1/courses/${params.id}`
            ),
        },
        {
          path: "/myCart",
          element: <MyCart />,
        },
      ],
    },
    {
      path: "/",
      element: <AdminLayout />,
      children: [
        {
          path: "/admin/requests",
          element: (
            <PrivateRoute>
              <ApproveReq />
            </PrivateRoute>
          ),
        },
        {
          path: "/admin/approved-requests",
          element: (
            <PrivateRoute>
              <ApprovedReq />
            </PrivateRoute>
          ),
        },
      ],
    },
    {
      path: "/",
      element: <UserLayout />,
      children: [
        {
          path: "/user/myRequest",
          element: (
            <PrivateRoute>
              <MyTeacherReq />,
            </PrivateRoute>
          ),
        },
        {
          path: "/user/createCourse",
          element: (
            <PrivateRoute>
              <CreateNewCourse />
            </PrivateRoute>
          ),
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};
export default AllRoutesFunc;

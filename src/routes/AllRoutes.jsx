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
import Order from "../pages/Orderpage/Order";
import { axiosPublic } from "../hooks/useAxiosPublic";

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
          path: "/order/:id",
          element: <Order />,
          loader: ({ params }) =>
            fetch(
              `${import.meta.env.VITE_API_URL}/api/v1/courses/${params.id}`
            ),
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};
export default AllRoutesFunc;

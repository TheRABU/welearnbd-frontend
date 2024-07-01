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
          path: "/login",
          element: !user ? <Login /> : <Navigate to="/" />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};
export default AllRoutesFunc;

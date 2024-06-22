import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Homepage/Home";
import AllCoursePage from "../pages/AllCoursespage/AllCoursePage";
import JoinTeacherPage from "../pages/JoinTeacherPage/JoinTeacherPage";
import Coursedetails from "../pages/CourseDetailspage/Coursedetails";

/* 
TODO: make the courseDetails page private
*/

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
]);
export default router;

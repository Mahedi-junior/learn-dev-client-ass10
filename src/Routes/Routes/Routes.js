import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import CourseCategory from "../../pages/CourseCategory/CourseCategory";
import Courses from "../../pages/Courses/Courses/Courses";
import Home from "../../pages/Home/Home/Home";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/courses",
        element: <Courses></Courses>,
      },
      {
        path: "/category/:id",
        element: <CourseCategory></CourseCategory>,
      },
    ],
  },
]);

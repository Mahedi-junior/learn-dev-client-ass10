import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import CourseCategory from "../../pages/CourseCategory/CourseCategory";
import Courses from "../../pages/Courses/Courses/Courses";
import Blog from "../../pages/Home/Blog/Blog";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/login/Login/Login";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/courses"),
      },

      {
        path: "/category/:id",
        element: <CourseCategory></CourseCategory>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/category/${params.id}`),
      },

      {
        path: "/courses/:id",
        element: <Courses></Courses>,
        loader: (params) => fetch(`http://localhost:5000/courses/${params.id}`),
      },

      {
        path: "blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);

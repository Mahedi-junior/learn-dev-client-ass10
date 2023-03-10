import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import CourseCategory from "../../pages/CourseCategory/CourseCategory";
import AllCourse from "../../pages/Courses/AllCourse/AllCourse";
import Courses from "../../pages/Courses/Courses/Courses";
import Blog from "../../pages/Home/Blog/Blog";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/login/Login/Login";
import Register from "../../pages/login/Register/Register";
import NotFound from "../../pages/Others/NotFound/NotFound";
import TermsAndConditions from "../../pages/Others/TermsAndConditions/TermsAndConditions";
import PurchaseCourse from "../../pages/shared/PurchaseCourse/PurchaseCourse";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://learn-dev-server.vercel.app/courses"),
      },
      {
        path: "/allcourses",
        element: <Home></Home>,
        loader: () => fetch("https://learn-dev-server.vercel.app/courses"),
      },

      {
        path: "/category/:id",
        loader: ({ params }) =>
          fetch(`https://learn-dev-server.vercel.app/category/${params.id}`),
        element: <CourseCategory></CourseCategory>,
      },

      {
        path: "/courses/:id",
        loader: ({ params }) =>
          fetch(`https://learn-dev-server.vercel.app/courses/${params.id}`),
        element: (
          <PrivateRoute>
            <Courses></Courses>
          </PrivateRoute>
        ),
      },

      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/purchase",
        element: <PurchaseCourse></PurchaseCourse>,
      },
      {
        path: "/terms",
        element: <TermsAndConditions></TermsAndConditions>,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);

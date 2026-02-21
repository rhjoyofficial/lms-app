import { createBrowserRouter } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/public/Home";
import Courses from "../pages/public/Courses";
import CourseDetails from "../pages/public/CourseDetails";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import StudentDashboard from "../pages/student/Dashboard";
import ProtectedRoute from "../auth/ProtectedRoute";
// import LessonWatch from "../pages/student/LessonWatch";
import CertificateView from "../pages/student/CertificateView";
import MainLayout from "../components/layout/MainLayout";
import StudentLayout from "../layouts/StudentLayout";
import StudentCoursePlayer from "../pages/student/StudentCoursePlayer";
import Contact from "../pages/public/Contact";
import About from "../pages/public/About";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/courses", element: <Courses /> },
      { path: "/courses/:slug", element: <CourseDetails /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "*", element: <NotFound /> },
    ],
  },
  {
    path: "/student",
    element: (
      <ProtectedRoute>
        <StudentLayout />
      </ProtectedRoute>
    ),
    errorElement: <NotFound />,
    children: [{ path: "dashboard", element: <StudentDashboard /> }],
  },
  {
    path: "/student/courses/:courseId",
    element: (
      <ProtectedRoute>
        <StudentCoursePlayer />
      </ProtectedRoute>
    ),
    errorElement: <NotFound />,
  },
  {
    path: "/student/courses/:courseId/certificate",
    element: (
      <ProtectedRoute>
        <CertificateView />
      </ProtectedRoute>
    ),
  },
]);

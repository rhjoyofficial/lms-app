import { Outlet, Link } from "react-router-dom";
import { useAuth } from "../../auth/AuthContext";

const MainLayout = () => {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
          <Link to="/" className="font-bold text-xl">
            LMS
          </Link>

          <nav className="space-x-4">
            <Link to="/courses" className="text-gray-700">
              Courses
            </Link>

            {user ? (
              <>
                <Link to="/student/dashboard">Dashboard</Link>
                <button onClick={logout} className="text-red-600 ml-2">
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
              </>
            )}
          </nav>
        </div>
      </header>

      {/* Page Content */}
      <main className="flex-1 bg-gray-50">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-white border-t text-center p-4 text-sm text-gray-500">
        © {new Date().getFullYear()} LMS Platform
      </footer>
    </div>
  );
};

export default MainLayout;

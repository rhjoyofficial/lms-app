import { Link } from "react-router-dom";

const CourseBreadcrumb = () => {
  return (
    <div className="bg-[#F9F9F9] py-4">
      <div className="max-w-8xl mx-auto px-4 text-sm text-gray-600">
        <Link to="/" className="hover:text-[#2F7C74]">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link to="/courses" className="hover:text-[#2F7C74]">
          Courses
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-800 font-medium">Course Details</span>
      </div>
    </div>
  );
};

export default CourseBreadcrumb;

import { useEffect, useState } from "react";
import { fetchEnrollments, fetchCourseProgress } from "../../api/student.api";
import { Link } from "react-router-dom";
import { useAuth } from "../../auth/AuthContext";

interface Enrollment {
  id: number;
  course: {
    id: number;
    title: string;
    slug: string;
  };
}

const StudentDashboard = () => {
  const { user, logout } = useAuth();
  const [enrollments, setEnrollments] = useState<Enrollment[]>([]);
  const [progress, setProgress] = useState<Record<number, number>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEnrollments()
      .then(async (data) => {
        setEnrollments(data);

        // Fetch progress for each course
        const progressMap: Record<number, number> = {};
        for (const e of data) {
          const p = await fetchCourseProgress(e.course.id);
          progressMap[e.course.id] = p.completion_percentage;
        }
        setProgress(progressMap);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <p className="p-6">Loading dashboard...</p>;
  }

  if (enrollments.length === 0) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold">My Courses</h1>
        <p className="mt-4 text-gray-500">
          You are not enrolled in any courses yet.
        </p>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold pb-3 mb-3 border-b">
        Welcome, {user?.name}
      </h1>
      <h1 className="text-2xl font-bold mb-6">My Courses</h1>

      <div className="grid md:grid-cols-2 gap-4">
        {enrollments.map((enrollment) => (
          <div
            key={enrollment.id}
            className="border rounded p-4 flex flex-col justify-between"
          >
            <div>
              <h2 className="font-semibold text-lg">
                {enrollment.course.title}
              </h2>

              <div className="mt-2">
                <div className="w-full bg-gray-200 h-2 rounded">
                  <div
                    className="bg-green-600 h-2 rounded"
                    style={{
                      width: `${progress[enrollment.course.id] ?? 0}%`,
                    }}
                  />
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  {progress[enrollment.course.id] ?? 0}% completed
                </p>
              </div>
            </div>

            <Link
              to={`/courses/${enrollment.course.slug}`}
              className="mt-4 text-center bg-black text-white py-2 rounded"
            >
              Resume Course
            </Link>
          </div>
        ))}
      </div>
      <button onClick={logout} className="mt-4 bg-red-600 text-white px-4 py-2">
        Logout
      </button>
      <Link
        to={`/student/courses/${enrollments[0].course.id}/certificate`}
        className="mt-2 text-center border border-blue-600 text-blue-600 py-1 rounded"
      >
        View Certificate
      </Link>
    </div>
  );
};

export default StudentDashboard;

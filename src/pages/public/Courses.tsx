import { useEffect, useState } from "react";
import { fetchCourses } from "../../api/course.api";

interface Course {
  id: number;
  title: string;
  slug: string;
  level: string;
  is_paid: boolean;
}

const Courses = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCourses()
      .then((data) => setCourses(data.data))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="p-6">Loading courses...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Courses</h1>

      <div className="grid md:grid-cols-3 gap-4">
        {courses.map((course) => (
          <a
            key={course.id}
            href={`/courses/${course.slug}`}
            className="border rounded p-4 hover:shadow"
          >
            <h2 className="font-semibold">{course.title}</h2>
            <p className="text-sm text-gray-500">{course.level}</p>
            <span className="text-sm">{course.is_paid ? "Paid" : "Free"}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Courses;

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCourseDetails } from "../../api/course.api";
import { enrollFreeCourse } from "../../api/enrollment.api";
import { bkashCheckout } from "../../api/payment.api";
import { useAuth } from "../../auth/AuthContext";

const CourseDetails = () => {
  const { slug } = useParams();
  const { user } = useAuth();

  const [course, setCourse] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!slug) return;

    fetchCourseDetails(slug)
      .then(setCourse)
      .finally(() => setLoading(false));
  }, [slug]);

  const handleEnroll = async () => {
    if (!course) return;
    setActionLoading(true);
    setMessage("");

    try {
      await enrollFreeCourse(course.id);
      setMessage("Successfully enrolled!");
      setCourse({
        ...course,
        is_enrolled: true,
      });
    } catch (err: any) {
      setMessage(err?.response?.data?.message || "Enrollment failed");
    } finally {
      setActionLoading(false);
    }
  };

  const handleBkash = async () => {
    if (!course) return;
    setActionLoading(true);
    setMessage("");

    try {
      const res = await bkashCheckout(course.id);
      window.location.href = res.bkash_url; // redirect
    } catch (err: any) {
      setMessage(err?.response?.data?.message || "Payment failed");
      setActionLoading(false);
    }
  };

  if (loading) return <p className="p-6">Loading...</p>;
  if (!course) return <p className="p-6">Course not found</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">{course.title}</h1>
      <p className="text-gray-600 mb-4">{course.description}</p>

      {/* ACTION BUTTON */}
      {user ? (
        course.is_enrolled ? (
          <p className="text-green-600 font-semibold">
            You are enrolled in this course
          </p>
        ) : course.is_paid ? (
          <button
            onClick={handleBkash}
            disabled={actionLoading}
            className="bg-pink-600 text-white px-6 py-2 rounded"
          >
            {actionLoading
              ? "Redirecting…"
              : `Buy with bKash (${course.price}৳)`}
          </button>
        ) : (
          <button
            onClick={handleEnroll}
            disabled={actionLoading}
            className="bg-green-600 text-white px-6 py-2 rounded"
          >
            {actionLoading ? "Enrolling…" : "Enroll for Free"}
          </button>
        )
      ) : (
        <p className="text-red-500">
          Please login to enroll or purchase this course.
        </p>
      )}

      {message && <p className="mt-4 text-blue-600">{message}</p>}

      {/* MODULES & LESSONS */}
      <h2 className="text-xl font-semibold mt-8 mb-3">Course Content</h2>

      {course.modules.map((module: any) => (
        <div key={module.id} className="mb-4">
          <h3 className="font-semibold">{module.title}</h3>
          <ul className="ml-4 list-disc">
            {module.lessons.map((lesson: any) => (
              <li key={lesson.id}>
                {lesson.is_free || course.is_enrolled ? (
                  <a
                    href={`/student/lessons/${lesson.id}`}
                    className="text-blue-600 underline"
                  >
                    {lesson.title}
                  </a>
                ) : (
                  <>
                    {lesson.title}{" "}
                    <span className="text-red-500">(Locked)</span>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default CourseDetails;

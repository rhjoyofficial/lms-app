import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchCourses } from "../../api/course.api";
import { Clock, Users } from "lucide-react";

interface Course {
  id: number;
  title: string;
  slug: string;
  image: string;
  price: string;
  offer_price: string;
  is_paid: boolean;
  level: string;
  duration: string;
  description: string;
  modules_count: string;
  enrollments_count: string;
  category: { name: string };
  instructor: { name: string };
}

const CourseGrid: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCourses()
      .then((res) => setCourses(res.data))
      .finally(() => setLoading(false));
  }, []);

  if (loading)
    return (
      <div className="py-20 text-center">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-teal-600"></div>
        <p className="mt-4 text-gray-600">কোর্স লোড হচ্ছে...</p>
      </div>
    );

  return (
    <div className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Simple Header */}
        <div className="text-center mb-10">
          <h2 className="text-[32px] md:text-[42px] leading-relaxed text-text-primary font-normal mb-2">
            আমাদের কোর্সসমূহ
          </h2>
          <p className="text-gray-600">
            নিচের কোর্সগুলোর মধ্য থেকে আপনার পছন্দের কোর্সটি নির্বাচন করুন
          </p>
        </div>
        {/* Simple Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Course Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />

                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className="text-xs font-medium bg-white/90 backdrop-blur-sm text-teal-700 px-3 py-1 rounded-full">
                    {course.category.name}
                  </span>
                </div>
              </div>

              {/* Course Content */}
              <div className="p-4">
                {/* Title */}
                <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 h-14">
                  {course.title}
                </h3>

                {/* Instructor */}
                <p className="text-sm text-gray-600 mb-3">
                  {course.instructor.name}
                </p>

                {/* Description */}
                <p className="text-sm text-gray-500 mb-4 line-clamp-2 h-10">
                  {course.description}
                </p>

                {/* Course Info */}
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users size={14} />
                    <span>{course.enrollments_count}</span>
                  </div>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between mb-4">
                  {course.is_paid ? (
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-teal-700">
                        ৳{parseInt(course.offer_price).toLocaleString()}
                      </span>
                      {parseInt(course.offer_price) <
                        parseInt(course.price) && (
                        <span className="text-sm text-gray-500 line-through">
                          ৳{parseInt(course.price).toLocaleString()}
                        </span>
                      )}
                    </div>
                  ) : (
                    <span className="text-lg font-bold text-teal-700">
                      ফ্রি
                    </span>
                  )}

                  <span
                    className={`text-xs font-medium px-2 py-1 rounded ${
                      course.level === "beginner"
                        ? "bg-green-100 text-green-800"
                        : course.level === "intermediate"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-red-100 text-red-800"
                    }`}
                  >
                    {course.level}
                  </span>
                </div>

                {/* View Button */}
                <Link
                  to={`/courses/${course.slug}`}
                  className="block w-full text-center bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 rounded-lg transition-colors"
                >
                  কোর্স দেখুন
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseGrid;

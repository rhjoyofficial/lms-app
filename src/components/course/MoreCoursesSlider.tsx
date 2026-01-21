import { motion } from "framer-motion";
import { moreCourses } from "../../data/moreCourses";

const MoreCoursesSlider = () => {
  return (
    <section className="py-24 bg-[#F9F9F9]">
      <div className="max-w-8xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold">More Courses You May Like</h2>
            <p className="mt-2 text-gray-600">
              Continue learning with these related courses.
            </p>
          </div>
        </div>

        {/* Slider */}
        <div className="overflow-x-auto">
          <div className="flex gap-6 min-w-max pb-4">
            {moreCourses.map((course) => (
              <motion.div
                key={course.id}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="w-72 bg-white rounded-xl border shadow-sm p-5 flex-shrink-0"
              >
                {/* Image */}
                <div className="h-40 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-gray-400 text-sm">Course Image</span>
                </div>

                {/* Content */}
                <h3 className="font-semibold mb-2">{course.title}</h3>

                <div className="text-sm text-gray-600 flex justify-between">
                  <span>⏱ {course.duration}</span>
                  <span>👨‍🎓 {course.students.toLocaleString()}</span>
                </div>

                <button className="mt-4 w-full py-2 border border-[#2F7C74] text-[#2F7C74] rounded hover:bg-[#2F7C74] hover:text-white transition">
                  View Details
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoreCoursesSlider;

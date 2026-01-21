import { motion } from "framer-motion";
import CourseBreadcrumb from "./CourseBreadcrumb";
import { courseDetails } from "../../data/courseDetails";

const CourseHero = () => {
  return (
    <>
      <CourseBreadcrumb />

      <section className="bg-gradient-to-b from-[#FBFEFE] to-[#E7F6F5] py-20">
        <div className="max-w-8xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              {courseDetails.title}
            </h1>

            <p className="mt-5 text-gray-600 max-w-xl">
              {courseDetails.subtitle}
            </p>

            {/* Stats */}
            <div className="mt-8 flex flex-wrap gap-6 text-sm text-gray-600">
              <span>⏱ {courseDetails.stats.duration}</span>
              <span>📘 {courseDetails.stats.modules} Modules</span>
              <span>👨‍🎓 {courseDetails.stats.students} Students</span>
            </div>

            {/* Promo */}
            <p className="mt-6 text-sm text-[#2F7C74] font-medium">
              {courseDetails.promoText}
            </p>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="w-full h-80 bg-white rounded-2xl shadow-lg flex items-center justify-center"
          >
            Course Preview Image
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default CourseHero;

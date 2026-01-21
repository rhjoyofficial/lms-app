import CourseContentLeft from "./CourseContentLeft";
import CourseEnrollCard from "./CourseEnrollCard";
import { courseDetails } from "../../data/courseDetails";
const CourseLayout = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-8xl mx-auto px-4 grid lg:grid-cols-3 gap-12">
        {/* Left */}
        <div className="lg:col-span-2">
          <CourseContentLeft />
        </div>

        {/* Right */}
        <div className="hidden lg:block">
          <CourseEnrollCard courseId={1} price={courseDetails.price} />
        </div>
      </div>
    </section>
  );
};

export default CourseLayout;

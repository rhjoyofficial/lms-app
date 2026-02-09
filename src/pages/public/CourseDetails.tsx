import CourseHero from "../../components/course/CourseHero";
import CourseLayout from "../../components/course/CourseLayout";
// import MoreCoursesSlider from "../../components/course/MoreCoursesSlider";
import FAQSection from "../../components/sections/FAQSection";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchCourseDetails } from "../../api/course.api";

const CourseDetails = () => {
  const { slug } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    if (!slug) return;
    fetchCourseDetails(slug).then((data) => {
      setCourse(data);
    });
  }, [slug]);

  if (!course) {
    return (
      <div className="py-20 text-center">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-teal-600"></div>
        <p className="mt-4 text-gray-600">কোর্স লোড হচ্ছে...</p>
      </div>
    );
  }
  
  return (
    <>
      <CourseHero course={course} />
      <CourseLayout course={course} />
      {/* <MoreCoursesSlider /> */}
      <FAQSection />
    </>
  );
};

export default CourseDetails;

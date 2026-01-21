import CourseHero from "../../components/course/CourseHero";
import CourseLayout from "../../components/course/CourseLayout";
import MoreCoursesSlider from "../../components/course/MoreCoursesSlider";
import FAQSection from "../../components/sections/FAQSection";

const CourseDetails = () => {
  return (
    <>
      <CourseHero />
      <CourseLayout />
      <MoreCoursesSlider />
      <FAQSection />
    </>
  );
};

export default CourseDetails;

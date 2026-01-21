import { courseDetails } from "../../data/courseDetails";

const CourseContentLeft = () => {
  return (
    <div className="space-y-16">
      {/* Instructor */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Instructor</h2>

        <div className="flex gap-4 items-start">
          <div className="w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center">
            RH
          </div>
          <div>
            <p className="font-medium">{courseDetails.instructor.name}</p>
            <p className="text-sm text-gray-600">
              {courseDetails.instructor.role}
            </p>
            <p className="mt-3 text-gray-600 max-w-2xl">
              {courseDetails.instructor.bio}
            </p>
          </div>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">What You Will Learn</h2>

        <ul className="grid md:grid-cols-2 gap-3">
          {courseDetails.outcomes.map((item, index) => (
            <li key={index} className="flex gap-2 text-gray-700">
              <span className="text-[#2F7C74]">✔</span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Course Structure */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Course Structure</h2>

        <ol className="space-y-3">
          {courseDetails.structure.map((item, index) => (
            <li
              key={index}
              className="flex gap-4 items-center bg-[#F9F9F9] p-4 rounded"
            >
              <span className="font-semibold text-[#2F7C74]">{index + 1}</span>
              <span>{item}</span>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
};

export default CourseContentLeft;

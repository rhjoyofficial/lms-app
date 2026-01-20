import api from "./axios";

export const fetchEnrollments = async () => {
  const res = await api.get("/student/enrollments");
  return res.data.data;
};

export const fetchCourseProgress = async (courseId: number) => {
  const res = await api.get(`/student/courses/${courseId}/progress`);
  return res.data;
};

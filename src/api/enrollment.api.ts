import api from "./axios";

export const enrollFreeCourse = async (courseId: number) => {
  const res = await api.post(`/student/courses/${courseId}/enroll`);
  return res.data;
};

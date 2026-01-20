import api from "./axios";

export const generateCertificate = async (courseId: number) => {
  const res = await api.post(`/student/courses/${courseId}/certificate`);
  return res.data.data;
};

export const fetchCertificate = async (courseId: number) => {
  const res = await api.get(`/student/courses/${courseId}/certificate`);
  return res.data.data;
};

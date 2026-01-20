import api from "./axios";

export const fetchLesson = async (lessonId: number) => {
  const res = await api.get(`/student/lessons/${lessonId}`);
  return res.data;
};

export const updateLessonProgress = async (
  lessonId: number,
  watchedDuration: number,
) => {
  const res = await api.post(`/student/lessons/${lessonId}/progress`, {
    watched_duration: watchedDuration,
  });
  return res.data;
};

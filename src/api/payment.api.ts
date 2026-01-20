import api from './axios';

export const bkashCheckout = async (courseId: number) => {
  const res = await api.post(`/student/courses/${courseId}/bkash/checkout`);
  return res.data; // { bkash_url }
};

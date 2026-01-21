import api from "./axios";

export const checkEnrollmentStatus = async (courseId: number) => {
  const res = await api.get(
    `/student/courses/${courseId}/enrollment-status`
  );
  return res.data;
};

export const applyCoupon = async (
  courseId: number,
  code: string
) => {
  const res = await api.post("/public/coupons/validate", {
    course_id: courseId,
    code,
  });
  return res.data;
};

export const startBkashCheckout = async (
  courseId: number,
  couponCode?: string
) => {
  const res = await api.post(
    `/student/courses/${courseId}/bkash/checkout`,
    couponCode ? { coupon_code: couponCode } : {}
  );
  return res.data;
};

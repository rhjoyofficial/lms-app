import { useEffect, useState } from "react";
import { useAuth } from "../../auth/AuthContext";
import {
  applyCoupon,
  checkEnrollmentStatus,
  startBkashCheckout,
} from "../../api/enroll.api";

interface Props {
  courseId: number;
  price: number;
}

const CourseEnrollCard = ({ courseId, price }: Props) => {
  const { user } = useAuth();

  const [coupon, setCoupon] = useState("");
  const [finalPrice, setFinalPrice] = useState(price);
  const [loading, setLoading] = useState(false);
  const [enrolled, setEnrolled] = useState(false);
  const [error, setError] = useState("");

  // Check enrollment
  useEffect(() => {
    if (!user) return;

    checkEnrollmentStatus(courseId).then((res) => {
      setEnrolled(res.enrolled);
    });
  }, [user, courseId]);

  const handleApplyCoupon = async () => {
    setError("");
    try {
      const res = await applyCoupon(courseId, coupon);

      if (!res.valid) {
        setError(res.message);
        return;
      }

      setFinalPrice(res.final_price);
    } catch {
      setError("Invalid coupon");
    }
  };

  const handleEnroll = async () => {
    if (!user) {
      window.location.href = "/login";
      return;
    }

    setLoading(true);

    try {
      const res = await startBkashCheckout(courseId, coupon || undefined);

      // FREE COURSE (no redirect)
      if (res.message) {
        window.location.reload();
        return;
      }

      // PAID COURSE
      window.location.href = res.bkash_url;
    } catch {
      setError("Enrollment failed");
    } finally {
      setLoading(false);
    }
  };

  if (enrolled) {
    return (
      <div className="bg-white border rounded-2xl p-6 shadow-sm">
        <p className="text-green-600 font-medium text-center">
          You are already enrolled in this course
        </p>
      </div>
    );
  }

  return (
    <div className="sticky top-28 bg-white border rounded-2xl p-6 shadow-sm">
      {/* Price */}
      <div className="mb-6">
        <p className="text-sm text-gray-500">Course Fee</p>
        <p className="text-3xl font-bold">৳{finalPrice}</p>
      </div>

      {/* Coupon */}
      <div className="mb-6">
        <input
          value={coupon}
          onChange={(e) => setCoupon(e.target.value)}
          placeholder="Enter promo code"
          className="w-full border rounded px-4 py-2"
        />
        <button
          onClick={handleApplyCoupon}
          className="mt-3 w-full border border-[#2F7C74] text-[#2F7C74] py-2 rounded"
        >
          Apply Coupon
        </button>
      </div>

      {error && <p className="text-red-600 text-sm mb-4">{error}</p>}

      {/* Enroll */}
      <button
        onClick={handleEnroll}
        disabled={loading}
        className="w-full py-3 bg-[#2F7C74] text-white rounded font-medium disabled:opacity-50"
      >
        {loading ? "Processing..." : "Enroll Now"}
      </button>

      <p className="mt-4 text-xs text-gray-500 text-center">
        Lifetime access · Certificate included
      </p>
    </div>
  );
};

export default CourseEnrollCard;

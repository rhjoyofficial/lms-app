import { useEffect, useState } from "react";

const getTimeLeft = (startAt: string) => {
  const diff = new Date(startAt).getTime() - Date.now();
  if (diff <= 0) return null;

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
};

const CourseLockedScreen = ({ startAt }: { startAt: string }) => {
  const [time, setTime] = useState(getTimeLeft(startAt));

  useEffect(() => {
    const i = setInterval(() => {
      setTime(getTimeLeft(startAt));
    }, 1000);

    return () => clearInterval(i);
  }, [startAt]);

  if (!time) {
    window.location.reload();
    return null;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center space-y-6">
        <div className="text-6xl">🔒</div>

        <h1 className="text-2xl font-bold text-gray-800">
          কোর্স এখনও শুরু হয়নি
        </h1>

        <p className="text-gray-600 text-sm">
          নির্ধারিত সময়ে কোর্সটি স্বয়ংক্রিয়ভাবে চালু হবে
        </p>

        <div className="grid grid-cols-4 gap-3">
          {Object.entries(time).map(([k, v]) => (
            <div key={k} className="bg-gray-50 rounded-xl py-3 text-center">
              <p className="text-xl font-bold text-brand-primary">{v}</p>
              <p className="text-xs text-gray-500 uppercase">{k}</p>
            </div>
          ))}
        </div>

        <p className="text-xs text-gray-500">
          শুরু হবে: {new Date(startAt).toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default CourseLockedScreen;

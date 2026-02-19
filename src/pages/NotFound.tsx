import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-lg text-gray-600 mb-6">
        দুঃখিত! আপনি যে পেজটি খুঁজছেন তা পাওয়া যায়নি।
      </p>

      <Link
        to="/"
        className="bg-brand-primary text-white px-6 py-3 rounded-full hover:bg-teal-800 transition"
      >
        হোমে ফিরে যান
      </Link>
    </div>
  );
};

export default NotFound;

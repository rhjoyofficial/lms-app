import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  fetchCertificate,
  generateCertificate,
} from "../../api/certificate.api";

const CertificateView = () => {
  const { courseId } = useParams();
  const [certificate, setCertificate] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!courseId) return;

    fetchCertificate(Number(courseId))
      .then(setCertificate)
      .catch(async () => {
        try {
          const cert = await generateCertificate(Number(courseId));
          setCertificate(cert);
        } catch {
          setError("Certificate not available yet.");
        }
      })
      .finally(() => setLoading(false));
  }, [courseId]);

  if (loading) {
    return <p className="p-6">Loading certificate…</p>;
  }

  if (error) {
    return <p className="p-6 text-red-600">{error}</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white max-w-3xl w-full border-8 border-yellow-500 p-10 relative shadow-xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold tracking-wide">
            Certificate of Completion
          </h1>
          <p className="mt-2 text-gray-600">
            This certificate is proudly presented to
          </p>
        </div>

        {/* Student Name */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-semibold text-blue-700">
            {certificate.user_name}
          </h2>
        </div>

        {/* Course Info */}
        <div className="text-center mb-8">
          <p className="text-gray-700">
            For successfully completing the course
          </p>
          <h3 className="text-2xl font-bold mt-2">
            {certificate.course_title}
          </h3>
        </div>

        {/* Footer Info */}
        <div className="flex justify-between items-center mt-10">
          <div>
            <p className="text-sm text-gray-600">Issued on</p>
            <p className="font-semibold">{certificate.issued_at}</p>
          </div>

          <div className="text-right">
            <p className="text-sm text-gray-600">Certificate ID</p>
            <p className="font-mono text-sm">
              {certificate.certificate_number}
            </p>
          </div>
        </div>

        {/* Verification */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">Verify at:</p>
          <a
            href={`${import.meta.env.VITE_API_URL.replace(
              "/api",
              "",
            )}/verify/certificates/${certificate.certificate_number}`}
            target="_blank"
            className="text-blue-600 underline break-all"
          >
            /verify/certificates/{certificate.certificate_number}
          </a>
        </div>

        {/* Download Button */}
        <div className="mt-10 text-center">
          <button
            disabled
            className="bg-gray-400 text-white px-6 py-2 rounded cursor-not-allowed"
          >
            Download PDF (Coming Soon)
          </button>
        </div>
      </div>
    </div>
  );
};

export default CertificateView;

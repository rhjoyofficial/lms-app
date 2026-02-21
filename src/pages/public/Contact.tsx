const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>

      <p className="text-gray-600 text-center mb-10">
        Have any questions? Feel free to reach out to us directly.
      </p>

      <div className="space-y-6">

        {/* Email */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 flex items-center justify-between flex-col sm:flex-row gap-4">
          <div>
            <h2 className="font-semibold text-lg">Email Support</h2>
            <p className="text-gray-600">support@cmmoin.academy</p>
          </div>

          <a
            href="mailto:support@cmmoin.academy"
            className="bg-brand-primary text-white px-5 py-2 rounded-full hover:bg-teal-800 transition"
          >
            Send Email
          </a>
        </div>

        {/* Phone */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 flex items-center justify-between flex-col sm:flex-row gap-4">
          <div>
            <h2 className="font-semibold text-lg">Call Us</h2>
            <p className="text-gray-600">+880 13349 43784</p>
          </div>

          <a
            href="tel:+8801334943784"
            className="bg-brand-primary text-white px-5 py-2 rounded-full hover:bg-teal-800 transition"
          >
            Call Now
          </a>
        </div>

        {/* WhatsApp */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 flex items-center justify-between flex-col sm:flex-row gap-4">
          <div>
            <h2 className="font-semibold text-lg">WhatsApp</h2>
            <p className="text-gray-600">+880 13349 43784</p>
          </div>

          <a
            href="https://wa.me/8801334943784"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-5 py-2 rounded-full hover:bg-green-600 transition"
          >
            Chat on WhatsApp
          </a>
        </div>

      </div>
    </div>
  );
};

export default Contact;

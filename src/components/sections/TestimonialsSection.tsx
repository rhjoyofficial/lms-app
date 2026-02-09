import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "../../data/testimonials";

const TestimonialsSection = () => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [paused]);

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with decorative elements */}
        <div className="text-center mb-12">
          <h2 className="text-[32px] md:text-[42px] leading-relaxed text-text-primary font-normal">
            শিক্ষার্থীদের মতামত
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            আমাদের কোর্সে অংশগ্রহণকারী শিক্ষার্থীরা যা বলছেন
          </p>
        </div>

        {/* Main testimonial card with grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left side - Large testimonial */}
          <div
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            className="relative"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonials[index].id}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100 relative overflow-hidden"
              >
                {/* Decorative quote mark */}
                <div className="absolute -top-4 -left-4 text-teal-100 text-7xl font-serif">
                  "
                </div>

                <div className="relative z-10">
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
                    "{testimonials[index].quote}"
                  </p>

                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center text-white font-bold text-lg">
                      {testimonials[index].name.charAt(0)}
                    </div>
                    <div className="ml-4">
                      <p className="font-bold text-gray-900 text-lg">
                        {testimonials[index].name}
                      </p>
                      {testimonials[index].role && (
                        <p className="text-sm text-gray-500">
                          {testimonials[index].role}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation dots */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === index ? "bg-teal-600 w-8" : "bg-gray-300"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right side - All testimonials grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setIndex(i)}
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
                className={`p-5 rounded-xl border cursor-pointer transition-all duration-300 ${
                  i === index
                    ? "bg-gradient-to-br from-teal-50 to-white border-teal-200 shadow-md transform scale-[1.02]"
                    : "bg-white border-gray-200 hover:border-teal-200 hover:shadow-sm"
                }`}
              >
                <div className="flex items-start space-x-3">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-medium ${
                      i === index
                        ? "bg-gradient-to-br from-teal-500 to-teal-700"
                        : "bg-gray-300"
                    }`}
                  >
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-600 line-clamp-2 mt-1">
                      "{testimonial.quote}"
                    </p>
                  </div>
                </div>
                {i === index && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-3 pt-3 border-t border-teal-100"
                  >
                    <p className="text-sm text-teal-600 font-medium">
                      নির্বাচিত মতামত
                    </p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats or additional info */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="text-3xl font-bold text-teal-600">৪.৯</div>
            <div className="text-sm text-gray-600 mt-2">গড় রেটিং</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="text-3xl font-bold text-teal-600">৫০০+</div>
            <div className="text-sm text-gray-600 mt-2">
              সন্তুষ্ট শিক্ষার্থী
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="text-3xl font-bold text-teal-600">৯৮%</div>
            <div className="text-sm text-gray-600 mt-2">সাফল্যের হার</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="text-3xl font-bold text-teal-600">১০০%</div>
            <div className="text-sm text-gray-600 mt-2">
              সন্তুষ্টি গ্যারান্টি
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

import { useState } from "react";
import { faqs } from "../../data/faqs";

const FAQSection = () => {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="py-24 bg-[#F9F9F9]">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-gray-600">
            Answers to common questions about our platform.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq) => {
            const isOpen = active === faq.id;

            return (
              <div
                key={faq.id}
                className="bg-white border rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setActive(isOpen ? null : faq.id)}
                  className="w-full flex justify-between items-center px-6 py-4 text-left"
                >
                  <span className="font-medium">{faq.question}</span>
                  <span className="text-xl">{isOpen ? "−" : "+"}</span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-4 text-gray-600">{faq.answer}</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

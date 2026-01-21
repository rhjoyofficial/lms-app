import { motion } from "framer-motion";
import { whyUsData } from "../../data/whyUs";

const WhyStudyWithUsSection = () => {
  return (
    <section className="py-24 bg-[#FBFEFE]">
      <div className="max-w-8xl mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-xl md:text-[42px] leading-relaxed">
            কেন এই প্ল্যাটফর্ম আপনার জীবনের মোড় ঘুরিয়ে দিতে পারে?
          </h2>
          <p className="mt-4 text-gray-600">
            We focus on quality, flexibility, and real-world outcomes.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* Left Cards */}
          <div className="space-y-10">
            {whyUsData.slice(0, 2).map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#2F7C74]/10 text-[#2F7C74]">
                    <Icon />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Center Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-3 flex justify-center"
          >
            <div className="w-full max-w-md h-80 bg-white rounded-2xl shadow-lg flex items-center justify-center">
              <span className="text-gray-400">Learning Experience Image</span>
            </div>
          </motion.div>

          {/* Right Cards */}
          <div className="space-y-10">
            {whyUsData.slice(2).map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#2F7C74]/10 text-[#2F7C74]">
                    <Icon />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyStudyWithUsSection;

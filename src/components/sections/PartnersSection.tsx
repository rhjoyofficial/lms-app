import { partners } from "../../data/partners";

const PartnersSection = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-8xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Our Trusted Partners
          </h2>
          <p className="mt-3 text-gray-600">
            We collaborate with industry leaders and innovative companies.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative w-full overflow-hidden">
          <div className="flex gap-12 animate-partners">
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="min-w-[160px] h-20 bg-gray-100 rounded-xl flex items-center justify-center text-gray-500 font-semibold"
              >
                {partner.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;

import { featureCards } from "@/constants";

const WhyShop = () => {
  return (
    <section className="lg:mx-[80px] my-16 sm:my-32 sm:px-8 px-4 ">
      <div className="container mx-auto ">
        <h2 className="font-bold text-3xl text-center md:mb-12 mb-8">
          Why Shop WIth MultiMart?
        </h2>

        {/* feature cards */}
        <div className=" flex xl:justify-between  flex-wrap gap-4 ">
          {featureCards.map((feature) => (
            <div
              key={feature.id}
              className="flex-1 min-w-[340px] backdrop-blur-md bg-white/40 rounded-xl p-6 border border-white/80 hover:shadow-lg hover:bg-white/50 transform hover:-translate-y-2 transition-all duration-300"
            >
              <div
                className={`h-12 w-12 mb-4 flex justify-center ${feature.iconBg} items-center rounded-full`}
              >
                <feature.Icon className={`w-6 h-6 ${feature.iconColor}`} />
              </div>
              <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
              <p className="opacity-70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyShop;

import { trustedBrands } from "@/constants";
import { Fade } from "react-awesome-reveal";

const Trusted = () => {
  return (
    <section className=" lg:mx-[80px] flex flex-col md:my-32 my-16 ">
      <h2 className=" mb-12 text-center font-semibold sm:text-[1rem]  ">
        Trusted by 500+ Leading Brands
      </h2>
      <div className="flex justify-center items-center flex-wrap  gap-12">
        {trustedBrands.map((brand, i) => {
          return (
            <Fade
              direction="up"
              key={brand.id}
              fraction={0.8}
              delay={100 * i}
              triggerOnce
            >
              <brand.Icon className="brands" />
            </Fade>
          );
        })}
      </div>
    </section>
  );
};

export default Trusted;

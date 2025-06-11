import Apple from "@/assets/icons/apple.svg?react";
// Nike, Samsung, Google, Microsoft, Amazon
import Nike from "@/assets/icons/nike.svg?react";
import Samsung from "@/assets/icons/samsung.svg?react";
import Google from "@/assets/icons/google.svg?react";
import Microsoft from "@/assets/icons/microsoft.svg?react";
import Amazon from "@/assets/icons/amazon.svg?react";

const Trusted = () => {
  return (
    <section className=" lg:mx-[80px] flex flex-col md:my-32 my-16 ">
      <h2 className=" mb-12 text-center font-semibold sm:text-[1rem]  ">
        Trusted by 500+ Leading Brands
      </h2>
      <div className="flex justify-center items-center flex-wrap  gap-12">
        <Apple className="brands" />
        <Nike className="brands " />
        <Samsung className="brands hover:text-samsung" />
        <Google className="brands " />
        <Microsoft className="brands" />
        <Amazon className="brands" />
      </div>
    </section>
  );
};

export default Trusted;

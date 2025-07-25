import { categories } from "@/constants";
import { Button } from "@/components/ui/button";
import { MdOutlineArrowForward } from "react-icons/md";
import { Fade } from "react-awesome-reveal";

const Featured = () => {
  return (
    <section className="lg:mx-[80px] my-16 sm:my-32 ">
      <div className="relative container mx-auto flex flex-col px-4 ">
        <div className="absolute right-0 top-30 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute top-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
        <h3 className="text-3xl font-bold text-center md:mb-12 mb-8">
          Featured Categories
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 lg:gap-6">
          {categories.map((category, i) => (
            <Fade direction="up" delay={100 * i} triggerOnce>
              <div
                key={category.title}
                className="md:p-4 p-1 flex flex-col items-center border border-white/50 rounded-3xl backdrop-blur-md bg-white/30 hover:bg-white/50 transform hover:-translate-y-1 hover:shadow-lg active:-translate-y-1 active:shadow-lg transition-all duration-300"
              >
                <category.Icon
                  className={`w-9 h-9 mb-2 ${category.iconColor}`}
                />
                <p>{category.title}</p>
              </div>
            </Fade>
          ))}
        </div>
        <Fade
          direction="up"
          delay={800}
          triggerOnce
          className="self-center mt-10"
        >
          <Button className="button gradient">
            View All Categories
            <span>
              <MdOutlineArrowForward />
            </span>
          </Button>
        </Fade>
      </div>
    </section>
  );
};

export default Featured;

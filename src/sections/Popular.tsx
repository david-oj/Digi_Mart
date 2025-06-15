import { popularCategories } from "@/constants"
import { Button } from "@/components/ui/button"
import { MdOutlineArrowForward } from "react-icons/md"
import LazyImage from "@/components/LazyImage"
const Popular = () => {
  return (
    <section className="lg:mx-[80px] px-4 my-16 sm:my-32 relative">
      <div className="container mx-auto ">
        <div className="flex flex-col items-center">
          <h3 className="text-3xl font-bold text-center md:mb-12 mb-8"> Popular Categories</h3>

          <div className="md:flex grid grid-cols-2 gap-4 sm:gap-8 justify-center items-center flex-wrap">
            {popularCategories.map((popular) => (
              <div className=" flex h-full flex-col max-w-71 sm:min-w-63 min- card overflow-hidden group " key={popular.title}>
                {/* image & overlay div */}
                <div className="sm:h-48 h-34 relative overflow-hidden">
                  <LazyImage src={popular.img}
                    alt={popular.title}
                    className="h-full w-full object-cover transform  group-hover:scale-110  group-active:scale-110 duration-300 transition-all"
                  />

                  {/* overlay */}
                  <div className="absolute inset-0 flex items-end opacity-0 group-hover:opacity-100 group-active:opacity-100 duration-300 transition-all  bg-gradient-to-t from-black/60 to-transparent">
                    <div className={`px-2 py-1 m-4 rounded-full text-white text-xs ${popular.productsColor}`}>
                      <p>{popular.products}</p>
                    </div>
                  </div>

                </div>


                {/* card text section */}
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="font-medium sm:mb-1">{popular.title}</h3>
                  <p className="opacity-70 sm:mb-3 mb-2 flex-grow">{popular.description}</p>
                  <a className="flex items-center gap-2 text-purple-600 group-hover:underline group-active:underline">Explore <span className="transition-transform group-hover:translate-x-1 group-active:translate-x-1 "><popular.Icon /></span></a>
                </div>
              </div>
            ))}
          </div>
          <Button className="mt-10 text-black bg-t-white button"> View all categories <span> <MdOutlineArrowForward /> </span> </Button>

        </div>
      </div>
    </section>
  )
}

export default Popular
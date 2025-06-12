import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  fashionImg1,
  electronics,
  customer1,
  customer2,
  customer3,
} from "@/assets";
import ShoppingBag from "@/assets/icons/shopping_bag.svg?react";
import Payments from "@/assets/icons/payments.svg?react";
import LocalShopping from "@/assets/icons/local_shipping.svg?react";

const Hero = () => {
  return (
    <section className="lg:mx-[80px] from-purple-50 via-white to-purple-50">
      <div className="relative @container container mx-auto px-4 md:pt-12 pt-8 ">
        <div className=" flex flex-col md:flex-row items-center sm:gap-12">
          <div className=" flex-1 space-y-6">
            {/*Glass circles decoration */}
            <div className="absolute z-0 -top-25 -left-10  w-72 h-72 bg-purple-500/20 rounded-full blur-3xl" />
            <div className="absolute z-0 -bottom-10 right-0 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl" />
            <div className="absolute z-0 -top-45 -right-20 w-60 h-60 bg-pink-500/10 rounded-full blur-3xl" />
            <div className="inline-block px-3 py-1 text-sm text-purple-600 bg-purple-50 rounded-full">
              150+ Vendors
            </div>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Discover and Shop <br className="block" /> Across Multiple{" "}
              <br className="max-md:hidden max-sm:block" /> Brands
            </h1>

            <p className="text-lg text-gray-600 max-w-lg">
              Explore thousands of products from verified vendors all in one
              place. Join the new era of online shopping with MultiMart.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button className="button gradient">Start Shopping</Button>
              <Button
                variant="outline"
                className=" button bg-white/50 hover:bg-white/70 "
              >
                Become a Vendor
              </Button>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex -space-x-2">
                {[customer1, customer2, customer3].map((c, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 overflow-hidden"
                  >
                    <img
                      src={c}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="space-y-1">
                <div className="text-sm font-medium">
                  Trusted by 10,000+ customers
                </div>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                  <span className="text-sm text-gray-600 ml-1">4.8/5</span>
                </div>
              </div>
            </div>
          </div>

          {/* Image Card Section */}
          <div className="relative transform sm:-translate-x-[5%] translate-x-[5%] flex-1 h-[480px] flex justify-center md:justify-end items-end max-lg:scale-[0.85] @max-[425px]:scale-[0.70] ">
            {/*floating icons */}
            <div className="absolute right-80 top-5 z-20 w-14 h-14 rounded-full flex justify-center items-center  backdrop-blur-md shadow-lg border border-white/50 animate-bounce">
              <ShoppingBag className="text-purple-600 w-[24px] h-[24px]" />
            </div>
            <div className="absolute top-39 -right-5 z-10  w-14 h-14 rounded-full flex justify-center items-center bg-white/30 backdrop-blur-sm shadow-lg border border-white/50 animate-pulse">
              <Payments className="text-green-400  w-[24px] h-[24px]" />
            </div>
            <div className="absolute md:bottom-18 bottom-0 right-57 z-10 w-14 h-14 rounded-full flex justify-center items-center bg-white/40 backdrop-blur-md shadow-lg border border-white/50 ">
              <LocalShopping className="text-blue-600 w-[24px] h-[24px]" />
            </div>

            <div className=" relative w-[300px] h-[400px] left-[3rem]">
              {/* First Card */}
              <div className="absolute top-0 right-35 h-[310px] w-[270px] hover:z-10 transition-all hover:rotate-0 duration-600 bg-white/30 border border-white/50 backdrop-blur-md overflow-hidden rounded-4xl flex flex-col transform rotate-[6deg] shadow-lg ">
                <div className="h-[75%] ">
                  <img
                    src={fashionImg1}
                    alt="fashionimg"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                    fetchPriority="high"
                  />
                </div>
                <div className="my-2 px-4">
                  <p className="font-medium">Premium Fashion</p>
                  <p>200+ Brands</p>
                </div>
              </div>

              {/* Second Card */}
              <div className="absolute top-30 h-[310px] w-[270px] transition-all hover:rotate-0 duration-600 bg-white/30 border border-white/50 backdrop-blur-md overflow-hidden rounded-4xl flex flex-col transform rotate-[-6deg] shadow-lg z-0 ">
                <div className="h-[75%] ">
                  <img
                    src={electronics}
                    alt="fashionimg"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                    fetchPriority="high"
                  />
                </div>
                <div className="my-2 px-4">
                  <p className="font-medium">Tech & Gadgets</p>
                  <p>150+ Vendors</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

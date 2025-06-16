import { useState } from "react";
import { Search, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/constants/index";
import Menu from "@/assets/icons/menu.svg?react";
import Close from "@/assets/icons/close.svg?react";
import { Fade } from "react-awesome-reveal";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <header id="home" className="relative z-50 lg:mx-[80px] px-4 py-4 ">
      <div className="container mx-auto">
        <div className="flex items-center relative justify-between">
          <Fade direction="down" cascade damping={0.2} triggerOnce>
            {/* DigiMart Logo */}
            <div className="flex items-center gap-1">
              <div className="size-8  bg-purple-600 rounded-lg flex justify-center items-center">
                <div className="size-6 bg-white rounded-xl flex justify-center items-center">
                  <div className="rounded-lg flex justify-center items-center">
                    <span className="text-purple-600 font-semibold text-xl">
                      D
                    </span>
                  </div>
                </div>
              </div>
              <span className="text-xl font-semibold text-purple-600">igi</span>
              {/* Vertival Bar */}
              <div className="h-6 border border-purple-600" />
              <span className="text-xl font-semibold text-blue-600 ">Mart</span>
            </div>

            {/* Desktop nav  */}
            <nav className="hidden md:flex items-center md:gap-8 lg:gap-14">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="opacity-70 hover:opacity-100 transition-all hover:text-purple-500"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* desktop nav icons */}
            <div className="md:flex hidden items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-pink-100 rounded-full"
              >
                <Search className="w-5 h-5 " />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-pink-100 rounded-full"
              >
                <ShoppingCart className="w-5 h-5 hover:text-purple-500" />
              </Button>
              <Button
                variant="ghost"
                className="opacity-70 hover:opacity-100 transition-all border border-transparent hover:border-white/50 hover:text-purple-500 hover:bg-pink-200"
              >
                Sign In
              </Button>
            </div>
          </Fade>

          {/* mobile nav  */}
          <div className=" md:hidden z-50 relative">
            <Fade direction="down" delay={100} triggerOnce>
              <button className="" onClick={() => setToggle((prev) => !prev)}>
                {toggle ? <Close className="text-gray-800 " /> : <Menu />}
              </button>

              {toggle && (
                <div className="sidebar flex absolute right-[0] flex-col px-8 py-4 rounded-lg  backdrop-blur-md bg-white/30 border border-white/50 ">
                  {navLinks.map((link, index) => (
                    <li
                      key={link.label}
                      className={`${
                        index !== navLinks.length - 1 ? "mb-4" : "mb-2"
                      } list-none transition-all hover:text-purple-500 opacity-70 hover:opacity-100`}
                    >
                      <a href={link.href}>{link.label} </a>
                    </li>
                  ))}

                  {/* mobile nav icons */}
                  <div className="flex mb-1">
                    <a href="#">
                      <Button
                        variant="ghost"
                        size="icon"
                        className=" hover:text-purple-500 hover:bg-pink-100 rounded-full"
                      >
                        <Search className="w-5 h-5" />
                      </Button>
                    </a>
                    <a href="#">
                      <Button
                        variant="ghost"
                        size="icon"
                        className=" hover:text-purple-500 hover:bg-pink-100 rounded-full"
                      >
                        <ShoppingCart className="w-5 h-5" />
                      </Button>
                    </a>
                  </div>
                  <a href="#">
                    <Button
                      variant="outline"
                      className="hover:bg-pink-100 opacity-70 hover:opacity-100 hover:text-purple-500 border-2 border-white/30 hover:border-white/40"
                    >
                      Sign In
                    </Button>
                  </a>
                </div>
              )}
            </Fade>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

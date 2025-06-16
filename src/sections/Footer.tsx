import LazyImage from "@/components/LazyImage";
import { footerLinks } from "@/constants";
import { companyInfo } from "@/constants";
import { bottomLinks } from "@/constants";
import { Fade } from "react-awesome-reveal";

const Footer = () => {
  return (
    <section className="lg:mx-[80px] px-4 md:mt-32 mt-16">
      <div className="container mx-auto">
        <div className="flex sm:gap-12 gap-8 flex-wrap">
          <Fade direction="up" className="flex-1" cascade damping={0.1} triggerOnce>
            {companyInfo.map((info, id) => (
              <div key={id} >
                {/* DigiMart Logo */}
                <a href="#home">
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
                    <span className="text-xl font-semibold text-purple-600">
                      igi
                    </span>
                    {/* Vertival Bar */}
                    <div className="h-6 border border-purple-600" />
                    <span className="text-xl font-semibold text-blue-600 ">
                      Mart
                    </span>
                  </div>
                </a>
                <p className="mt-6 opacity-70 max-w-sm">{info.description}</p>
                {/* FIrst section */}
                <div className="flex sm:gap-4 gap-2 mt-4">
                  {info.socialIcons.map((icon) => (
                    <a
                      href={icon.href}
                      target="blank"
                      rel="noopener noreferrer"
                    >
                      <div
                        className="sm:w-10 sm:h-10 h-8 w-8 rounded-full flex items-center justify-center bg-white/80 backdrop-blur-md border border-white/50 hover:cursor-pointer"
                        key={icon.alt}
                      >
                        <LazyImage
                          src={icon.icon}
                          alt={icon.alt}
                          className="sm:w-6 sm:h-6 w-5 h-5"
                          priority="low"
                        />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            ))}

            {footerLinks.map((footer) => (
              <div className="flex-1 " key={footer.title}>
                <h3 className="text-lg font-medium mb-4">{footer.title}</h3>

                {footer.links ? (
                  // middle sections
                  <ul className=" flex flex-col gap-4 min-w-[96px]">
                    {footer.links?.map((link) => (
                      <li
                        key={link.label}
                        className="opacity-70 hover:opacity-100 hover:cursor-pointer hover:text-purple-600 transition-all"
                      >
                        <a href={link.href}>{link.label} </a>
                      </li>
                    ))}
                  </ul>
                ) : (
                  //last section
                  <div>
                    <p className="max-w-sm">{footer.description}</p>
                    <div className=" flex sm:flex-col flex-row gap-2 mt-4">
                      {footer.images.map((image) => (
                        <a href={image.href}>
                          <div className="flex-1 max-w-[150px] bg-amber-100">
                            <img
                              src={image.src}
                              alt={image.alt}
                              className="w-full h-full object-cover"
                              loading="lazy"
                              decoding="async"
                            />
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </Fade>
        </div>

        {/* copyright & bottomLinks section */}
        <div className="flex flex-col md:flex-row justify-between mt-16 sm:pb-8 pb-4">
          <Fade direction="up" cascade damping={0.1} triggerOnce>
            <div className="max-md:text-center">
              <p>
                © {new Date().getFullYear()} DigiMart. All rights reserved.
                Developed by{" "}
                <a
                  href="#"
                  className="hover:text-purple-500 hover:underline active:text-purple-500 active:underline transition-all"
                >
                  Protevon
                </a>{" "}
              </p>
            </div>

            <div className="flex max-md:justify-center gap-4">
              {bottomLinks.map((link) => (
                <ul key={link.label}>
                  <li className="opacity-70  hover:opacity-100 hover:cursor-pointer transition-all">
                    <a href={link.href}>{link.label} </a>
                  </li>
                </ul>
              ))}
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default Footer;

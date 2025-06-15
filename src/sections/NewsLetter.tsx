import { Button } from "@/components/ui/button"
import { MdOutlineLock } from "react-icons/md"
import { gifts } from "@/assets"
import LazyImage from "@/components/LazyImage"
const NewsLetter = () => {
    return (
        <section className="lg:mx-[80px] my-16 sm:my-32">
            <div className="container mx-auto p-4">
                <div className="flex gap-16 max-w-6xl mx-auto">
                    <div className=" flex-1 max-w-xl flex flex-col ">
                        <p className='w-fit max-md:self-center px-4 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-4'>Limited Time Offer</p>
                        <h2 className='text-3xl max-md:text-center font-bold md:mb-4 mb-2'>
                            Get 15% Off Your First Purchase
                        </h2>
                        <p className='text-lg opacity-80 md:mb-6 mb-4 max-md:text-center'>
                            Sign up for our newsletter and receive a special discount
                            code for your first order. Plus, stay updated with the
                            latest products and exclusive deals.
                        </p>

                        <div className=" relative flex gap-2 md:h-14 h-13 items-center w-full max-w-lg max-md:m-auto  rounded-full backdrop-blur-md border border-white/50 bg-white/70">
                            <input type="email" placeholder='Enter your email' className="px-4 h-full rounded-full flex-grow backdrop-blur-md focus:ring-2 focus:outline-none focus:ring-purple-600/50 " />
                            <Button className="absolute right-0.5 md:py-6 px-6 py-5.5 gradient backdrop-blur-md rounded-full transform duration-300 border border-white/50 hover:cursor-pointer hover:shadow-lg "> Subscribe</Button>
                        </div>

                        <p className="flex max-md:justify-center items-center gap-2 text-sm mt-4 ">
                            <MdOutlineLock className="text-green-600 text-base" />
                            We respect your privacy and will never share your
                            information
                        </p>
                    </div>

                    <div className="flex-1 hidden md:block overflow-hidden transform transition duration-300 rotate-[3deg] hover:rotate-0 rounded-3xl ">
                        <LazyImage src={gifts}
                            alt="sale"
                            className="w-full h-full "
                            priority="low"
                        />
                    </div>
                </div>


            </div>
        </section>
    )
}

export default NewsLetter
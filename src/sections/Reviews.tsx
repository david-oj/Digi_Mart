import { customerReviews } from "@/constants";
import RatingStars from "@/components/RatingStars";
import LazyImage from "@/components/LazyImage";
import { Zoom } from "react-awesome-reveal";

const Reviews = () => {
  return (
    <section className=" lg:mx-[80px] px-4 sm:px-8 my-16 sm:my-32">
      <div className="relative container mx-auto">
        <div className="absolute sm:top-10 top-20 -left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute -right-10 sm:top-30 bottom-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
        <h3 className="text-3xl font-bold text-center md:mb-12 mb-8">
          Customer Reviews
        </h3>
        <div className="flex gap-4 flex-wrap max-sm:justify-center">
          {customerReviews.map((review, index) => (
            <Zoom
              className="flex-1 min-w-[282px] max-sm:max-w-[396px]  transform hover:-translate-y-2 transition duration-200 p-8 space-y-4 border border-white/50 rounded-2xl backdrop-blur-md bg-white/30"
              key={index}
              direction="right"
              delay={index * 80}
              triggerOnce
            >
              <div>
                <div className="flex gap-4">
                  <div className="size-12 rounded-full overflow-hidden">
                    <LazyImage
                      src={review.image}
                      alt="customer-review-image"
                      className="w-full h-full object-cover"
                      priority="low"
                    />
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="text-xl text-bold">{review.name}</span>
                    <RatingStars rating={review.rating} />
                  </div>
                </div>
                <p className="text-base">{review.text}</p>
                <div className=""></div>
              </div>
            </Zoom>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;

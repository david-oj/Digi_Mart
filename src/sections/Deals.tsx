import { useState, useEffect, useMemo, useCallback } from "react";
import { deals } from "@/constants";
import { Button } from "@/components/ui/button";
import { MdOutlineArrowForward } from "react-icons/md";

const Deals = () => {
    const hours = 30;
    const minutes = 10;
    const seconds = 0;


    const resetCountdown = (newHours: number, newMinutes: number, newSeconds: number) => {
        const newDurationMs = (newHours * 3600 + newMinutes * 60 + newSeconds) * 1000;
        const newTargetTime = Date.now() + newDurationMs;
        localStorage.setItem("countdownTargetTime", newTargetTime.toString());
        setTimeLeft(Math.floor(newDurationMs / 1000)); // update state immediately
    };

    const resetButton = false;


    const initialDurationMs = (hours * 3600 + minutes * 60 + seconds) * 1000;

    // Retrieve or set the countdown target time in localStorage
    const targetTime = useMemo(() => {
        if (typeof window === "undefined") return Date.now();

        const stored = localStorage.getItem("countdownTargetTime");
        if (stored) return parseInt(stored, 10);

        const newTarget = Date.now() + initialDurationMs;
        localStorage.setItem("countdownTargetTime", newTarget.toString());
        return newTarget;
    }, [initialDurationMs]);

    //Calculates time left
    const calculateTimeLeft = useCallback(() => {
        const difference = targetTime - Date.now();
        return Math.max(Math.floor(difference / 1000), 0);
    }, [targetTime]);

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(intervalId);
    }, [calculateTimeLeft]);

    const hoursLeft = Math.floor(timeLeft / 3600);
    const minutesLeft = Math.floor((timeLeft % 3600) / 60);
    const secondsLeft = timeLeft % 60;

    const formatTime = (timeValue: number) => timeValue.toString().padStart(2, "0");

    const countDown = [
        {
            title: "Hours",
            value: formatTime(hoursLeft),
        },
        {
            title: "Minutes",
            value: formatTime(minutesLeft)
        },
        {
            title: "Seconds",
            value: formatTime(secondsLeft)
        },
    ];

    return (
        <section className="lg:mx-[80px] px-4 sm:px-8 my-16 sm:my-32">
            <div className="container mx-auto flex flex-col">
                <div className="flex-1">
                    <h3 className="text-3xl font-bold text-center md:mb-12 mb-8">
                        Deals and Discounts
                    </h3>

                    {/* Deals Cards */}
                    <div className="flex gap-4 sm:gap-8 flex-wrap justify-center items-center">
                        {deals.map((deal, index) => (
                            <div className="flex-1 card overflow-hidden group relative min-w-63 " key={index}>
                                <div className="bg-red-500 absolute z-10 right-0 m-4 py-1 px-2 font-bold w-fit rounded-full">
                                    <p className="text-white text-xs">{deal.discount}</p>
                                </div>
                                <div className="h-48 overflow-hidden relative">
                                    <img src={deal.img}
                                        alt={deal.title}
                                        className="object-cover h-full w-full transform transition-all duration-300 group-hover:scale-110 group-active:scale-110"
                                        loading="lazy"
                                        decoding="async"
                                    />
                                    <div className="flex items-end absolute overflow-hidden inset-0 bg-gradient-to-t from-black/60 to-transparent duration-300  opacity-0 group-hover:opacity-100 group-active:opacity-100">
                                        <p className={`${deal.highlightColor} text-xs w-fit py-1 px-2 m-4 rounded-full text-white `}>{deal.highlight}</p>
                                    </div>
                                </div>

                                <div className="p-4">
                                    <h3 className="font-medium mb-1 text-lg">{deal.title}</h3>
                                    <div className="flex gap-2 mb-3 items-center">
                                        <p className="text-purple-700 font-bold text-lg">{deal.discountPrice}</p>
                                        <p className="line-through text-sm opacity-70">{deal.price}</p>
                                    </div>
                                    <p className="flex items-center gap-2 text-purple-600 group-hover:underline group-active:underline">Shop Now <span className="transition-all group-hover:translate-x-1 group-active:translate-x-1"><deal.Icon /></span> </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/*Discount Banner */}
                <div className="sm:w-[90%] mx-auto">
                    <div className=" flex sm:flex-row flex-col items-center justify-between gap-3 mx-auto w-full max-w-5xl mt-12 md:p-6 p-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-3xl duration-100 hover:shadow-xl active:shadow-xl backdrop-blur-md border border-white/50 group">
                        <div className="flex flex-col max-md:items-center" >
                            <p className="px-3 py-1 mb-3 text-sm bg-purple-100 text-purple-700 font-medium rounded-full w-fit">Flash Sale</p>
                            <h3 className='text-2xl font-bold mb-2 max-[49.8rem]:text-center'>
                                Weekend Special: Extra 15% Off
                            </h3>
                            <p className='bg- opacity-80 mb-4 text-center'>
                                Use code <span className='font-bold'>WEEKEND15</span> at
                                checkout • Ends in 48 hours
                            </p>
                            <Button className="button gradient md:self-start group-hover:-translate-y-1 group-active:-translate-y-1"> Shop the Sale <span className="transition-transform group-hover:translate-x-1 group-active:translate-x-1"> <MdOutlineArrowForward /> </span></Button>
                        </div>

                        {/* Time Display UI */}
                        <div className="flex gap-3 justify-center md:mt-4 mt-2">
                            {countDown.map((time, index) => (
                                <div className="bg-white/70 p-1 h-16 w-16 backdrop-blur-md rounded-full flex flex-col items-center justify-center border border-white/50" key={index}>
                                    <h3 className="sm:text-xl text-base font-bold">{time.value}</h3>
                                    <p className="text-sm">{time.title}</p>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
                <Button className="mt-10 self-center text-black bg-t-white button"> More Deals <span> <MdOutlineArrowForward /> </span> </Button>
                {resetButton && <Button variant="ghost" className="self-center button mt-10 " onClick={() => resetCountdown(hours, minutes, seconds)}>Reset to {hours} hours</Button>}
            </div>
        </section>
    );
};

export default Deals;

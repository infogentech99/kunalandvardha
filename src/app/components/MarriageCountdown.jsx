"use client";
import { useEffect, useState } from "react";

export default function MarriageCountdown() {
  const TARGET_DATE = new Date("2026-11-12").getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 14,
    hours: 12,
    minutes: 28,
    seconds: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const diff = TARGET_DATE - now;

      if (diff <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));

      const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );

      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
      });
    };

    updateCountdown();

    // Update every second
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="rounded-[32px] border border-[#efd9a9] bg-[#FEF8ED] px-6 py-7 text-center mt-36">
        <p className="cormorant-garamond mb-4 text-[12px] uppercase tracking-[4px] font-semibold text-[#C78617] md:text-2xl  text-center">
          Counting Down
        </p>
        <h2 className="text-[#C78617] pinyon-script-regular text-center md:text-4xl text-[30px] lg:text-[60px] leading-tight mt-2">
          A Lifetime of Togetherness
        </h2>

        <p className="mt-4 cormorant-garamond text-[14px] italic leading-relaxed text-[#5c5959] text-center">
          Begins With One Sacred Step
        </p>

        <div className="my-6 flex w-full items-center justify-center gap-4">
          <span className="h-px w-11 bg-gradient-to-r from-transparent to-[#d9a64e]" />
          <span className="text-lg leading-none text-[#b97b17]">✦</span>
          <span className="h-px w-11 bg-gradient-to-l from-transparent to-[#d9a64e]" />
        </div>

        <div className="flex md:gap-12 gap-2 justify-center items-center mt-6">
          <div className="border px-4 py-3 bg-[#FEF8ED] border-[#efd9a9] rounded-2xl">
            <h2 className="text-[22px] md:text-4xl lg:text-[52px] text-center text-[#B35800] cormorant-garamond">
          
              {timeLeft.days}
            </h2>
            <h2 className="text-[10px] md:text-2xl lg:text-[15px] text-center text-[#5c5959] cormorant-garamond uppercase">
              Days{" "}
            </h2>
          </div>
          <div className="border px-4 py-3 bg-[#FEF8ED] border-[#efd9a9] rounded-2xl">
            <h2 className="text-[22px] md:text-4xl lg:text-[52px] text-center text-[#B35800] cormorant-garamond">
              {" "}
              {timeLeft.hours}
            </h2>
            <h2 className="text-[10px] md:text-2xl lg:text-[15px] text-center text-[#5c5959] cormorant-garamond uppercase">
              Hours
            </h2>
          </div>
          <div className="border px-4 py-3 bg-[#FEF8ED] border-[#efd9a9] rounded-2xl">
            <h2 className="text-[22px] md:text-4xl lg:text-[52px] text-center text-[#B35800] cormorant-garamond">
              {" "}
              {timeLeft.minutes}
            </h2>
            <h2 className="text-[10px] md:text-2xl lg:text-[15px] text-center text-[#5c5959] cormorant-garamond uppercase">
              Minutes
            </h2>
          </div>
          <div className="border px-4 py-3 bg-[#FEF8ED] border-[#efd9a9] rounded-2xl">
            <h2 className="text-[22px] md:text-4xl lg:text-[52px] text-center text-[#B35800] cormorant-garamond">
              {timeLeft.seconds}
            </h2>
            <h2 className="text-[10px] md:text-2xl lg:text-[15px] text-center text-[#5c5959] cormorant-garamond uppercase">
              Seconds
            </h2>
          </div>
        </div>
         <p className="pinyon-script-regular text-[24px] tracking-[2px] text-[#C78617] md:text-xl md:tracking-[4px] mt-6 text-center">
          November 11 & 12, 2026
        </p>
      </div>
    </>
  );
}

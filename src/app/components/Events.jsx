"use client";

export default function Events() {
  return (
    <div className="flex scroll-mt-6 flex-col justify-center mt-30 lg:mt-40 items-center">
      <p className="text-[12px] md:text-2xl text-[#C78617] cormorant-garamond uppercase tracking-[4px] font-semibold">
        The Celebrations Unfold
      </p>
      <h2 className="text-[#C78617] pinyon-script-regular text-center md:text-4xl text-[38px] lg:text-[60px] leading-tight mt-2">
        Sacred Ceremonies
      </h2>
      <div className="my-6 flex w-full items-center justify-center gap-4">
        <span className="h-px w-11 bg-gradient-to-r from-transparent to-[#d9a64e]" />
        <span className="text-lg leading-none text-[#b97b17]">✦</span>
        <span className="h-px w-11 bg-gradient-to-l from-transparent to-[#d9a64e]" />
      </div>

      <div className="relative flex flex-col text-center overflow-hidden rounded-2xl min-h-[520px] md:min-h-[1000px] px-10 py-3 md:px-25 md:mt-20 mt-8">
        <div className="absolute inset-0 bg-[url('/assets/event1.webp')] bg-cover bg-center bg-no-repeat"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col md:mt-50 mt-12">
          <h2 className="text-white cormorant-garamond text-[28px] md:text-3xl lg:text-[46px] font-semibold md:px-0 px-6">
            Midnight Bloom
          </h2>
          <p className="text-white pinyon-script-regular text-[16px] md:text-base">
            (A Evening of Love in Full Bloom)
          </p>
          <h2 className="text-white cormorant-garamond text-[16px] md:text-2xl lg:text-[22px] font-semibold md:px-0 px-6">
            Engagement & Cocktail Celebration
          </h2>
          <p className="text-white cormorant-garamond text-[16px] md:text-base mt-2">
            11 November 2026 <br />
            8:00 pm onwards
          </p>

          <p className="text-white cormorant-garamond text-sm md:text-base mt-2">
            <span className="text-[15px] md:text-base lg:text-xl font-cormorant-garamond font-semibold">
              Ziva Hall, Noura Resorts
            </span>
          </p>
        </div>
      </div>

      <div className="relative flex flex-col text-center overflow-hidden rounded-2xl min-h-[520px] md:min-h-[600px] px-10 py-3 md:px-25 md:mt-20 mt-8">
        <div className="absolute inset-0 bg-[url('/assets/event3.webp')] bg-cover bg-center bg-no-repeat"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col md:mt-10 mt-5">
          <h2 className="text-white cormorant-garamond text-[23px] md:text-3xl lg:text-[36px] font-semibold md:px-0 px-6">
            The Whimsy Carnival
          </h2>
          <p className="text-white pinyon-script-regular text-[16px] md:text-base">
            (A Little Sunshine, A Lot of Magic)
          </p>
          <h2 className="text-white cormorant-garamond text-[16px] md:text-2xl lg:text-[22px] font-semibold md:px-0 px-6">
            Haldi Celebration
          </h2>
          <p className="text-white cormorant-garamond text-[16px] md:text-base mt-2">
            12 November 2026 <br />
            11:00 am onwards
          </p>

          <p className="text-white cormorant-garamond text-sm md:text-base mt-2">
            <span className="text-[15px] md:text-base lg:text-xl font-cormorant-garamond font-semibold">
              Pool Side, Noura Resorts
            </span>
          </p>
        </div>
      </div>

      <div className="relative flex flex-col text-center overflow-hidden rounded-2xl min-h-[520px] md:min-h-[600px] px-10 py-3 md:px-25 md:mt-20 mt-8">
        <div className="absolute inset-0 bg-[url('/assets/event2.webp')] bg-cover bg-center bg-no-repeat"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col md:mt-10 mt-2">
          <h2 className="text-white cormorant-garamond text-[26.5px] md:text-3xl lg:text-[40px] font-semibold md:px-0 px-6">
            The Wedding Vows
          </h2>
          <p className="text-white pinyon-script-regular text-[16px] md:text-base">
            (Two hearts. One promise.)
          </p>
          <h2 className="text-white cormorant-garamond text-[16px] md:text-2xl lg:text-[22px] font-semibold md:px-0 px-6">
            Forever
          </h2>
          <p className="text-white cormorant-garamond text-[16px] md:text-base mt-2">
            12 November 2026 <br />
            8:00 pm onwards
          </p>

          <p className="text-white cormorant-garamond text-sm md:text-base mt-2">
            <span className="text-[15px] md:text-base lg:text-xl font-cormorant-garamond font-semibold">
              Noura Resorts
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

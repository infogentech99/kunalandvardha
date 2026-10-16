"use client";

export default function Venue() {
  const mapUrl = "https://maps.app.goo.gl/mCnwBByUdnt1Jvwj6";

  const embedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4223.958602482445!2d76.87351687619095!3d30.639468190133112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f95007875e801%3A0x79dcfdd2832b09!2sNoura!5e1!3m2!1sen!2sin!4v1792142168461!5m2!1sen!2sin%22%20width=%22600%22%20height=%22450%22%20style=%22border:0;%22%20allowfullscreen=%22%22%20loading=%22lazy%22%20referrerpolicy=%22strict-origin-when-cross-origin";

  return (
    <div className="mt-30">
      <p className="text-[12px] md:text-2xl text-[#C78617] cormorant-garamond uppercase tracking-[4px] font-semibold text-center">
        Find Us Here
      </p>
      <h2 className="text-[#C78617] pinyon-script-regular text-center md:text-4xl text-[38px] lg:text-[60px] leading-tight mt-2">
        The Venue
      </h2>
      <div className="my-6 flex w-full items-center justify-center gap-4">
        <span className="h-px w-11 bg-gradient-to-r from-transparent to-[#d9a64e]" />
        <span className="text-lg leading-none text-[#b97b17]">✦</span>
        <span className="h-px w-11 bg-gradient-to-l from-transparent to-[#d9a64e]" />
      </div>

      

      <div
        className="relative mx-auto flex max-w-[355px] mt-10 flex-col items-center overflow-hidden rounded-[32px] border border-[#d9c18a] px-6 py-10 text-center text-[#fff1c9] shadow-[0_12px_35px_rgba(91,104,65,0.15)]"
        style={{
          background:
            "linear-gradient(160deg, #819977 0%, #718c65 48%, #31583b 100%)",
        }}
      >
        {/* Decorative golden particles */}

        {/* Top ornament */}
        <div className="mb-10 flex h-8 items-center justify-center">
          <span className="text-[34px] text-[#fff0bd] drop-shadow-[0_0_12px_rgba(255,240,189,0.5)]">
            ✦
          </span>
        </div>

        {/* Blessing message */}
        <div className="relative z-10 cormorant-garamond text-[13px] italic leading-[1.8] text-[#fff5d9]">
          <p>
            Sealed with sacred vows, blessed by two loving families,and guided
            by the divine — we begin our forever with grateful and joyful
            hearts.
          </p>

          <p className="mt-4">
            We cannot wait to celebrate this beautiful chapter with you.
          </p>
        </div>

        {/* Divider */}
        <div className="my-8 flex w-full items-center justify-center gap-3">
          <span className="h-px w-12 bg-[#e6d09a]/80" />
          <span className="text-[15px] text-[#f8df96]">✦</span>
          <span className="h-px w-12 bg-[#e6d09a]/80" />
        </div>

        {/* Couple names */}
        <div className="relative z-10">
          <h1
            className="text-[39px] leading-tight text-[#f5d580] sm:text-[42px]"
            style={{ fontFamily: "'Pinyon Script', cursive" }}
          >
            Vardha <br/>
 <span className="text-[29px]">&</span>
          </h1>

          <h2
            className="mt-1 text-[43px] leading-tight text-[#f5d580] sm:text-[46px]"
            style={{ fontFamily: "'Pinyon Script', cursive" }}
          >
            Kunal 
          </h2>
        </div>

        {/* Wedding date */}
        <p className="mt-8 font-serif text-[9px] font-medium tracking-[5px] text-[#f4e6c0]">
          11 · 07 · 2026
        </p>

        {/* Footer divider */}
        <div className="mt-10 h-px w-full bg-[#d8d6a8]/35" />

        {/* Credits */}
        <div className="relative z-10 mt-6 cormorant-garamond text-[9px] font-semibold uppercase leading-[1.8] tracking-[3px] text-[#e1d9b7]">
          <p>Made with love for Vardha  &</p>
          <p>Kunal</p>
        </div>

        {/* <p
          className="mt-1 text-[27px] italic text-[#f3d17c]"
          style={{ fontFamily: "'Pinyon Script', cursive" }}
        >
          design diva
        </p>

        <a
          href="tel:+919549430748"
          className="relative z-10 mt-3 font-serif text-[12px] tracking-[2px] text-[#f4e8c7] transition-opacity hover:opacity-75"
        >
          +91 95494 30748
        </a> */}
      </div>



      <div className="mx-auto max-w-[360px] overflow-hidden rounded-[24px] mt-30 border border-[#f0d9ac] bg-[#fffaf1] shadow-[0_12px_30px_rgba(176,125,35,0.10)]">
        {/* Google Maps */}
        <div className="relative h-[265px] w-full overflow-hidden">
          <iframe
            src={embedUrl}
            title="Astro Celebrations Location"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0"
          />
        </div>

        {/* Venue Details */}
        <div className="flex flex-col items-center px-5 pb-6 pt-6 text-center">
          <h2 className="text-[27px] leading-tight text-[#d99a2b] pinyon-script-regular">
            Celebrations
          </h2>

          <p className="cormorant-garamond mt-4 text-[14px] italic leading-[1.6] text-[#88796b]">
            Kakrali, Bir Pir Machhalia, <br /> Punjab 140201
          </p>

          {/* Open in Maps Button */}
          <a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex min-w-[150px] items-center justify-center rounded-full bg-gradient-to-r from-[#eab747] to-[#d99a24] px-7 py-3.5 font-serif text-[10px] font-semibold uppercase tracking-[3px] text-white shadow-[0_5px_14px_rgba(201,145,36,0.15)] transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Open in Maps
          </a>
        </div>
      </div>
    </div>
  );
}

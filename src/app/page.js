"use client";

import { useEffect, useState, useRef } from "react";


import Hero from "./components/Hero";
import ScratchText from "./components/ScratchText";
import MarriageCountdown from "./components/MarriageCountdown";
import Story from "./components/Story";
import Events from "./components/Events";
import Venue from "./components/Venue";
import RoseHeroTemp from "./components/RoseHeroTemp";
export default function Home() {

  const audioRef = useRef(null);
  const [started, setStarted] = useState(false);
  const [playing, setPlaying] = useState(false);

  const startMusic = async () => {
    const audio = audioRef.current;
    if (!audio || started) return;
    try {
      audio.volume = 0.3;
      await audio.play();
      setStarted(true);
      setPlaying(true);
    } catch (err) {
      console.log("Audio play failed:", err);
    }
  };

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      try {
        await audio.play();
        setPlaying(true);
      } catch (err) {
        console.log("Audio play failed:", err);
      }
    }
  };

  useEffect(() => {
    if (started) return;
    const handler = () => startMusic();
    window.addEventListener("click", handler);
    window.addEventListener("touchstart", handler);
    return () => {
      window.removeEventListener("click", handler);
      window.removeEventListener("touchstart", handler);
    };
  }, [started]);
  
  return (
    <>
     
      <div className="bg-[#FDF7E9] px-5 pb-10">
          <button
        onClick={(e) => {
          e.stopPropagation();
          started ? toggleMusic() : startMusic();
        }}
        className="fixed bottom-4 right-4 z-50 bg-[#C78617] text-white px-3 py-1.5 rounded-xl text-xl"
      >
        {playing ? "⏸" : "▶"}
      </button>

      <audio ref={audioRef} src="/assets/song.mp3" loop preload="auto" playsInline />
        <div className="pointer-events-none fixed inset-0 z-20 h-screen w-screen">
          <RoseHeroTemp />
        </div>
        <Hero />
        <div className="text-center mt-32">
          <p className="text-[12px] md:text-2xl text-[#C78617] cormorant-garamond uppercase tracking-[4px] font-semibold">
            The Date
          </p>
          <h2 className="text-[#C78617] pinyon-script-regular text-center md:text-4xl text-[38px] lg:text-[60px] leading-tight mt-2">
            Save the Date
          </h2>
          <p className="mt-4 cormorant-garamond text-[14px] italic leading-relaxed text-[#5c5959]">
            Scratch the gold to unveil our special day
          </p>
          <ScratchText />
          <p className="mt-2 cormorant-garamond text-[10px]  uppercase tracking-[4px]  text-[#5c5959]  text-center">
            ✦ see you there ✦
          </p>
        </div>
        <MarriageCountdown />
        <Story />
        <Events />
        <Venue />
      </div>
    </>
  );
}

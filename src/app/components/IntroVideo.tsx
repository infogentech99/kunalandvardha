
"use client";

import { useEffect, useRef, useState } from "react";

export default function IntroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const [started, setStarted] = useState(false);
  const [hide, setHide] = useState(false);
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (!show) return;

    const scrollY = window.scrollY;
    const body = document.body;

    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";
    body.style.overflow = "hidden";

    return () => {
      body.style.position = "";
      body.style.top = "";
      body.style.left = "";
      body.style.right = "";
      body.style.width = "";
      body.style.overflow = "";

      window.scrollTo(0, scrollY);
    };
  }, [show]);

  const playVideo = async () => {
    const video = videoRef.current;

    if (!video || started) return;

    try {
      video.currentTime = 0;
      await video.play();
      setStarted(true);
    } catch (error) {
      console.error("Video playback failed:", error);
    }
  };

  const handleEnd = () => {
    setHide(true);

    window.setTimeout(() => {
      setShow(false);
    }, 700);
  };

  if (!show) return null;

  return (
    <div
      onClick={playVideo}
      className={`fixed inset-0 z-[999999] cursor-pointer overflow-hidden transition-opacity duration-700 ${
        hide ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
      style={{
        width: "100%",
        height: "100dvh",
        backgroundColor: "transparent",
      }}
    >
      <video
        ref={videoRef}
        playsInline
        muted
        preload="auto"
        onEnded={handleEnd}
        className="absolute inset-0 h-full w-full object-cover object-center"
        style={{ backgroundColor: "transparent" }}
      >
        <source src="/assets/hero_video.mp4" type="video/mp4" />
      </video>

      {!started && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            playVideo();
          }}
          aria-label="Play intro video"
          className="absolute left-1/2 top-1/2 z-10 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-transparent md:h-28 md:w-28"
        />
      )}
    </div>
  );
}

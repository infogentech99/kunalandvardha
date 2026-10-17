
"use client";

import { useEffect, useRef, useState } from "react";

export default function IntroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const [started, setStarted] = useState(false);
  const [hide, setHide] = useState(false);
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (show) {
      document.body.style.position = "fixed";
      document.body.style.top = "0";
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.overflow = "";
    };
  }, [show]);

  const playVideo = async () => {
    const video = videoRef.current;

    if (!video || started) return;

    try {
      setStarted(true);
      await video.play();
    } catch (error) {
      console.error("Video playback failed:", error);
      setStarted(false);
    }
  };

  const handleEnd = () => {
    setHide(true);

    setTimeout(() => {
      setShow(false);
    }, 700);
  };

  if (!show) return null;

  return (
    <div
      onClick={playVideo}
      className={`fixed inset-0 z-[999999] cursor-pointer overflow-hidden transition-opacity duration-700 ${
        hide ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      style={{
        width: "100%",
        height: "100dvh",
        backgroundColor: "#000",
      }}
    >
      <video
        ref={videoRef}
        playsInline
        muted
        preload="auto"
        onEnded={handleEnd}
        className="absolute inset-0 h-full w-full object-cover object-center"
      >
        <source src="/assets/hero_video.mp4" type="video/mp4" />
      </video>

      {!started && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            playVideo();
          }}
          aria-label="Play intro video"
          className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full text-4xl text-black transition hover:scale-110 cursor-pointer md:h-28 md:w-28"
        />
      )}
    </div>
  );
}

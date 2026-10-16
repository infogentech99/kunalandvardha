
"use client";

import { useMemo } from "react";

type FloatingPetalProps = {
  className?: string;
  style?: React.CSSProperties;
};

export default function FloatingPetal({
  className = "",
  style,
}: FloatingPetalProps) {
  const petalValues = useMemo(() => {
    return {
      duration: 12 + Math.random() * 12,
      delay: Math.random() * -24,
      scale:
        Math.random() < 0.6
          ? 0.4 + Math.random() * 0.4
          : 0.8 + Math.random() * 0.5,
      rotate: Math.random() * 360,
      drift: Math.random() * 80 - 40,
    };
  }, []);

  return (
    <img
      src="/flower_petals.webp"
      alt=""
      aria-hidden="true"
      draggable={false}
      className={`floating-petal ${className}`}
      style={
        {
          ...style,
          "--scale": petalValues.scale,
          "--rotate": `${petalValues.rotate}deg`,
          "--drift": `${petalValues.drift}px`,
          animationDuration: `${petalValues.duration}s`,
          animationDelay: `${petalValues.delay}s`,
        } as React.CSSProperties
      }
    />
  );
}

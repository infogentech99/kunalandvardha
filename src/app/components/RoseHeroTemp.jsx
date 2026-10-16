
"use client";

import FloatingPetal from "./FloatingPetal";

const petals = [
  { left: "3%", size: 16, opacity: 0.8 },
  { left: "8%", size: 24, opacity: 0.7 },
  { left: "13%", size: 22, opacity: 0.8 },
  { left: "16%", size: 22, opacity: 0.7 },
  { left: "23%", size: 16, opacity: 0.8 },
  { left: "24%", size: 22, opacity: 0.9 },
  { left: "33%", size: 22, opacity: 0.8 },
  { left: "38%", size: 24, opacity: 0.8 },
  { left: "43%", size: 16, opacity: 0.7 },
  { left: "48%", size: 22, opacity: 0.9 },
  { left: "53%", size: 22, opacity: 0.8 },
  { left: "58%", size: 20, opacity: 0.7 },
  { left: "63%", size: 24, opacity: 0.8 },
  { left: "68%", size: 16, opacity: 0.9 },
  { left: "73%", size: 22, opacity: 0.7 },
  { left: "78%", size: 22, opacity: 0.8 },
  { left: "83%", size: 22, opacity: 0.8 },
  { left: "88%", size: 24, opacity: 0.7 },
  { left: "93%", size: 16, opacity: 0.8 },
  { left: "97%", size: 24, opacity: 0.8 },
  { left: "15%", size: 16, opacity: 0.6 },
  { left: "35%", size: 20, opacity: 0.7 },
  { left: "65%", size: 16, opacity: 0.7 },
  { left: "85%", size: 20, opacity: 0.8 },
];

export default function RoseHeroTemp() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-20 overflow-hidden"
    >
      {petals.map((petal, index) => (
        <FloatingPetal
          key={index}
          className="absolute top-0"
          style={{
            left: petal.left,
            width: `${petal.size}px`,
            opacity: petal.opacity,
          }}
        />
      ))}
    </div>
  );
}

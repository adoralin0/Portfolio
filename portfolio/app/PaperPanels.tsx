"use client";

import Image from "next/image";
import { useState } from "react";

import OmbreBlob from "./OmbreBlob";
import screen1 from "./paper-panels-1.png";
import screen2 from "./paper-panels-2.png";
import screen3 from "./paper-panels-3.png";
import screen4 from "./paper-panels-4.png";

export default function PaperPanels() {
  const screens = [screen1, screen2, screen3, screen4];
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section
      id="paper-panels"
      style={{
        background: "#f2c8c8",
        padding: "70px 7% 70px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <OmbreBlob
        size={420}
        blur={70}
        opacity={0.65}
        style={{ top: -120, right: -80 }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 1100,
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            fontFamily: "'Libre Caslon Text', Georgia, serif",
            fontSize: "clamp(2.1rem, 4vw, 3.1rem)",
            fontWeight: 400,
            color: "#4a3535",
            letterSpacing: "0.08em",
            marginBottom: "1.4rem",
          }}
        >
          PAPER PANELS
        </h2>

        <p
          style={{
            fontFamily: "'Lexend Giga', sans-serif",
            fontSize: "clamp(0.78rem, 1.05vw, 0.95rem)",
            fontWeight: 300,
            color: "#5a4040",
            lineHeight: 1.9,
            maxWidth: 640,
            marginBottom: "2.2rem",
          }}
        >
          A cozy, Figma-designed webcomic app for short, in‑between moments — a
          calm, horizontal reading experience inspired by studio Ghibli
          palettes.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
            gap: 20,
          }}
        >
          {screens.map((src, i) => (
            <div
              key={i}
              className="project-card-hover"
              style={{
                borderRadius: 18,
                overflow: "hidden",
                background: "#E9D7CD",
                padding: 10,
                cursor: "pointer",
              }}
              onClick={() => setActiveIndex(i)}
            >
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  paddingBottom: "210%",
                }}
              >
                <Image
                  src={src}
                  alt={`Paper Panels screen ${i + 1}`}
                  fill
                  style={{ objectFit: "cover", borderRadius: 14 }}
                  sizes="(max-width: 768px) 45vw, 20vw"
                  unoptimized
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeIndex !== null && (
        <div
          onClick={() => setActiveIndex(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "40px 16px",
            zIndex: 9999,
          }}
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: 420,
              height: "80vh",
              borderRadius: 24,
              overflow: "hidden",
              background: "#E9D7CD",
              boxShadow: "0 20px 45px rgba(0,0,0,0.45)",
            }}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <Image
              src={screens[activeIndex]}
              alt={`Paper Panels screen ${activeIndex + 1}`}
              fill
              style={{
                objectFit: "contain",
                borderRadius: 24,
              }}
              sizes="(max-width: 768px) 90vw, 420px"
              unoptimized
            />
          </div>
        </div>
      )}
    </section>
  );
}

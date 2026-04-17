"use client";

import Image from "next/image";
import screen1 from "./paper-panels-1.png";
import screen2 from "./paper-panels-2.png";
import screen3 from "./paper-panels-3.png";
import screen4 from "./paper-panels-4.png";

export default function PaperPanels() {
  const screens = [screen1, screen2, screen3, screen4];
  const loopedScreens = [...screens, ...screens];

  return (
    <section
      id="paper-panels"
      style={{
        minHeight: "100vh",
        background: "#eacdc7",
        padding: "110px 0 72px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          maxWidth: "none",
          margin: "0 auto",
          padding: "0 1.5%",
        }}
      >
        <h2
          style={{
            fontFamily: "'Libre Caslon Text', Georgia, serif",
            fontSize: "clamp(2.5rem, 6vw, 4rem)",
            fontWeight: 400,
            color: "#4a3535",
            letterSpacing: "0.08em",
            marginBottom: "2.5rem",
            paddingLeft: "5.5%",
          }}
        >
          HIGHLIGHTS
        </h2>

        <div
          className="highlights-marquee"
          style={{
            overflow: "hidden",
            position: "relative",
          }}
        >
              <div
                className="highlights-track"
                style={{
                  display: "flex",
                  gap: 24,
                  width: "max-content",
                }}
              >
              {loopedScreens.map((src, i) => (
                <div
                  key={`${src.src}-${i}`}
                  className="project-card-hover"
                  style={{
                    width: "clamp(220px, 21vw, 320px)",
                    flex: "0 0 auto",
                    borderRadius: 18,
                    overflow: "hidden",
                    background: "rgba(207, 193, 180, 0.72)",
                    padding: 0,
                  }}
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
                      alt={`Paper Panels screen ${(i % screens.length) + 1}`}
                      fill
                      style={{ objectFit: "cover", borderRadius: 18 }}
                      sizes="(max-width: 768px) 45vw, 20vw"
                      unoptimized
                    />
                  </div>
                </div>
              ))}
              </div>
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  bottom: 0,
                  width: "min(4vw, 72px)",
                  pointerEvents: "none",
                  background: "linear-gradient(to right, rgba(234, 205, 199, 0.55) 0%, rgba(234, 205, 199, 0) 100%)",
                  zIndex: 5,
                }}
              />
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  bottom: 0,
                  width: "min(4vw, 72px)",
                  pointerEvents: "none",
                  background: "linear-gradient(to left, rgba(234, 205, 199, 0.55) 0%, rgba(234, 205, 199, 0) 100%)",
                  zIndex: 5,
                }}
              />
        </div>
      </div>
      <style>{`
        .highlights-track {
          animation: highlights-scroll 32s linear infinite;
        }
        @keyframes highlights-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(calc(-50% - 12px)); }
        }
        @media (prefers-reduced-motion: reduce) {
          .highlights-track {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}


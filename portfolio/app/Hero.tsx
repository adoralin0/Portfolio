"use client";
import { useEffect, useState } from "react";
import OmbreBlob from "./OmbreBlob";
import Image from "next/image";
import adorapic from "./adorapic.png";

const roles = ["Full-Stack Developer", "UI/UX Designer", "Game Developer"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [phase, setPhase] = useState<"typing" | "pausing" | "deleting">("typing");

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (phase === "typing") {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
      } else {
        timeout = setTimeout(() => setPhase("pausing"), 1800);
      }
    } else if (phase === "pausing") {
      timeout = setTimeout(() => setPhase("deleting"), 400);
    } else if (phase === "deleting") {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setPhase("typing");
      }
    }

    return () => clearTimeout(timeout);
  }, [displayed, phase, roleIndex]);

  return (
    <section
      id="home"
      className="hero-section"
      style={{
        minHeight: "clamp(640px, 96vh, 1100px)",
        background: "#eacdc7",
        display: "flex",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Blob 1 — top-left, large, behind everything */}
      <OmbreBlob
        size={480}
        blur={80}
        opacity={0.75}
        style={{ top: -100, left: -80, zIndex: 0 }}
      />

      {/* Blob 2 — bottom-right, behind photo */}
      <OmbreBlob
        size={420}
        blur={70}
        opacity={0.65}
        style={{ bottom: -120, right: -60, zIndex: 0 }}
      />

      {/* Left content */}
      <div
        className="hero-left"
        style={{
          flex: "0 0 55%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 clamp(20px, 5vw, 72px) 0 clamp(20px, 6vw, 88px)",
          zIndex: 2,
          position: "relative",
        }}
      >
        <h1 style={{
          fontFamily: "'Libre Caslon Text', Georgia, serif",
          fontSize: "clamp(2.7rem, 5.8vw, 5.3rem)",
          fontWeight: 400,
          color: "#3d2e2e",
          lineHeight: 1.15,
          marginBottom: "1.4rem",
          marginTop: 0,
        }}>
          I'm Adora Lin a<br />
          <span className="hero-typing" style={{ display: "inline-block", minWidth: "19ch" }}>
            {displayed}
            <span style={{
              display: "inline-block",
              width: 2,
              height: "0.85em",
              background: "#3d2e2e",
              marginLeft: 3,
              verticalAlign: "middle",
              animation: "blink 1s step-end infinite",
            }} />
          </span>
        </h1>

        <p style={{
          fontFamily: "'Lexend Giga', sans-serif",
          fontSize: "clamp(0.95rem, 1.5vw, 1.35rem)",
          fontWeight: 300,
          color: "#5a4040",
          lineHeight: 2,
          maxWidth: "clamp(300px, 42vw, 520px)",
          marginBottom: "2.8rem",
          letterSpacing: "0.01em",
        }}>
          I'm a sophomore at the University of Florida passionate about UX/UI design, game development, and software engineering.
        </p>
      </div>

      {/* Right — full-bleed photo, no card/border */}
      <div
        className="hero-right"
        style={{
          flex: "0 0 45%",
          position: "relative",
          zIndex: 1,
          overflow: "hidden",
          marginTop: "clamp(12px, 3vw, 40px)",
          marginLeft: "clamp(-190px, -12vw, -40px)",
        }}
      >
        <Image
          src={adorapic}
          alt="Adora Lin"
          fill
          className="hero-photo"
          style={{
            objectFit: "cover",
            objectPosition: "center top",
          }}
          priority
          unoptimized
        />
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Libre+Caslon+Text:ital,wght@0,400;0,700;1,400&family=Lexend+Giga:wght@100;200;300;400&display=swap');
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @media (max-width: 980px) {
          .hero-section {
            min-height: auto !important;
          }
          .hero-left {
            flex: 1 1 auto !important;
            width: 100%;
            padding: clamp(88px, 14vw, 126px) clamp(20px, 8vw, 44px) clamp(32px, 8vw, 64px) !important;
          }
          .hero-typing {
            min-width: 14ch !important;
          }
          .hero-right {
            display: none !important;
          }
        }
        @media (max-width: 760px) {
          .hero-typing {
            min-width: 12ch !important;
          }
        }
      `}</style>
    </section>
  );
}

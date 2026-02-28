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
      style={{
        minHeight: "100vh",
        background: "#f2c8c8",
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
      <div style={{
        flex: "0 0 55%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0 5% 0 6%",
        zIndex: 2,
        position: "relative",
      }}>
        <h1 style={{
          fontFamily: "'Libre Caslon Text', Georgia, serif",
          fontSize: "clamp(2.6rem, 5.5vw, 4.4rem)",
          fontWeight: 400,
          color: "#3d2e2e",
          lineHeight: 1.15,
          marginBottom: "1.4rem",
          marginTop: 0,
        }}>
          I'm Adora Lin a<br />
          <span style={{ display: "inline-block", minWidth: "2ch" }}>{displayed}</span>
          <span style={{
            display: "inline-block", width: 2, height: "0.85em",
            background: "#3d2e2e", marginLeft: 3, verticalAlign: "middle",
            animation: "blink 1s step-end infinite",
          }} />
        </h1>

        <p style={{
          fontFamily: "'Lexend Giga', sans-serif",
          fontSize: "clamp(0.85rem, 1.3vw, 1.05rem)",
          fontWeight: 300,
          color: "#5a4040",
          lineHeight: 2,
          maxWidth: 460,
          marginBottom: "2.8rem",
          letterSpacing: "0.01em",
        }}>
          I'm a sophomore at UF passionate about UX/UI design, game development, and software engineering.
        </p>

        <a
          href="/Adora_Lin_Resume.pdf"
          download="Adora_Lin_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            fontFamily: "'Lexend Giga', sans-serif",
            fontSize: "0.9rem",
            fontWeight: 300,
            color: "#3d2e2e",
            textDecoration: "none",
            letterSpacing: "0.04em",
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Download Resume
        </a>
      </div>

      {/* Right — full-bleed photo, no card/border */}
      <div style={{
        flex: "0 0 45%",
        position: "relative",
        zIndex: 1,
        overflow: "hidden",
        marginTop: 40,
      }}>
        <Image
          src={adorapic}
          alt="Adora Lin"
          fill
          style={{
            objectFit: "cover",
            objectPosition: "center top",
          }}
          priority
        />
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Libre+Caslon+Text:ital,wght@0,400;0,700;1,400&family=Lexend+Giga:wght@100;200;300;400&display=swap');
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
      `}</style>
    </section>
  );
}
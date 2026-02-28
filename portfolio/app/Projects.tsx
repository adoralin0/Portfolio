"use client";
import { useState } from "react";
import OmbreBlob from "./OmbreBlob";

const projects = [
  {
    name: "Ware Am I?",
    bullets: [
      "Designed and developed an arcade-style platformer featuring parkour mechanics, NPC interactions, and branching dialogue systems.",
      "Created and integrated 2D assets, animations, and UI elements to enhance player feedback.",
      "Applied foundational game design principles such as level pacing, accessibility, and intuitive user interaction.",
    ],
  },
  {
    name: "Sip Safe",
    bullets: [
      "Developed a full-stack AI safety platform using the Gemini Vision API to analyze drink environments for potential contaminants, winning “Best Use of DigitalOcean” at WiNGHacks 2026.",
      "Contributed to a backend using Node.js and MongoDB to manage user safety logs, integrating ElevenLabs TTS to provide immediate audio alerts for potential risk detections.",
    ],
  },
  {
    name: "New Biz - Case Studies",
    bullets: [
      "Translated complex design wireframes into scalable web pages using JavaScript and Tailwind CSS, improving site navigation and technical documentation for future clients.",
    ],
  },
  {
    name: "College of Engineering",
    bullets: [
      "Engineered interactive components for the UF College of Engineering Legacy website to catalog 100+ events.",
    ],
  },
];

export default function Projects() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      id="projects"
      style={{
        minHeight: "100vh",
        background: "#f2c8c8",
        padding: "80px 7% 80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Blob — top-right corner, small, peeking in (matches screenshots) */}
      <OmbreBlob
        size={280}
        blur={55}
        opacity={0.65}
        style={{ top: -90, right: -70 }}
      />

      <h2 style={{
        fontFamily: "'Libre Caslon Text', Georgia, serif",
        fontSize: "clamp(2.5rem, 6vw, 4rem)",
        fontWeight: 400,
        color: "#4a3535",
        letterSpacing: "0.08em",
        marginBottom: "2.5rem",
        position: "relative",
        zIndex: 1,
      }}>
        PROJECTS
      </h2>

      <div style={{ display: "flex", gap: "4%", alignItems: "flex-start", position: "relative", zIndex: 1 }}>
        {/* Left: accordion list */}
        <div style={{ flex: "0 0 auto", minWidth: 260 }}>
          {projects.map((p, i) => (
            <div key={i}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="accordion-btn-hover"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "18px 0",
                  width: "100%",
                  textAlign: "left",
                }}
              >
                <span className="accordion-btn-text" style={{
                  fontFamily: "'Lexend Giga', sans-serif",
                  fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)",
                  fontWeight: 400,
                  color: "#4a3535",
                  transition: "color 0.25s ease",
                }}>
                  {p.name}
                </span>
                <span style={{
                  fontFamily: "'Lexend Giga', sans-serif",
                  fontSize: "2.5rem",
                  color: "#7a5a5a",
                  transition: "transform 0.3s",
                  display: "inline-block",
                  transform: open === i ? "rotate(90deg)" : "rotate(0deg)",
                  marginLeft: 8,
                }}>
                  ›
                </span>
              </button>
            </div>
          ))}
        </div>

        {/* Right: description panel */}
        <div style={{
          flex: 1,
          fontFamily: "'Lexend Giga', sans-serif",
          fontSize: "clamp(0.8rem, 1.2vw, 0.98rem)",
          fontWeight: 300,
          color: "#4a3535",
          lineHeight: 1.9,
          paddingTop: 22,
          minHeight: 200,
          transition: "opacity 0.3s",
          opacity: open !== null ? 1 : 0,
        }}>
          {open !== null && (
            <ul style={{ margin: 0, paddingLeft: "1.15rem" }}>
              {projects[open].bullets.map((b) => (
                <li key={b} style={{ marginBottom: 12 }}>
                  {b}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Libre+Caslon+Text:ital,wght@0,400;0,700;1,400&family=Lexend+Giga:wght@100;200;300;400&display=swap');
      `}</style>
    </section>
  );
}
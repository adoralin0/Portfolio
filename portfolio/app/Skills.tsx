"use client";
import { useState } from "react";
import OmbreBlob from "./OmbreBlob";

const skills = [
  {
    category: "Languages",
    items: "SQL, Python, C++, JavaScript, HTML/CSS, RISC-V Assembly",
  },
  {
    category: "Frameworks",
    items: "MariaDB, SQLAlchemy, React.js, Flask, Node.js, Tailwind CSS, Auth0",
  },
  {
    category: "Developer Tools",
    items: "Git, GitHub, VS Code, CLion, PyCharm, Unity, Expo Go",
  },
  {
    category: "Technical Concepts",
    items: "Object-Oriented Programming, Data Structures & Algorithms, API Integration, Risk Mitigation, Database Management, Full-Stack Development",
  },
];

export default function Skills() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      id="skills"
      style={{
        minHeight: "80vh",
        display: "flex",
        overflow: "hidden",
      }}
    >
      {/* Left panel — solid E9D7CD */}
      <div
        style={{
          flex: "0 0 42%",
          minWidth: 280,
          maxWidth: 480,
          background: "#E9D7CD",
          padding: "80px 5% 80px 7%",
        }}
      >
        <h2 style={{
          fontFamily: "'Libre Caslon Text', Georgia, serif",
          fontSize: "clamp(2.5rem, 6vw, 4rem)",
          fontWeight: 400,
          color: "#4a3535",
          letterSpacing: "0.08em",
          marginBottom: "2.5rem",
        }}>
          SKILLS
        </h2>
        {skills.map((s, i) => (
            <div key={i}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="accordion-btn-hover"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 12,
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "20px 0",
                  width: "100%",
                  textAlign: "left",
                }}
              >
                <span className="accordion-btn-text" style={{
                  flex: 1,
                  minWidth: 0,
                  fontFamily: "'Lexend Giga', sans-serif",
                  fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)",
                  fontWeight: 400,
                  color: "#4a3535",
                  transition: "color 0.25s ease",
                }}>
                  {s.category}
                </span>
                <span style={{
                  flexShrink: 0,
                  width: 36,
                  textAlign: "center",
                  fontFamily: "'Lexend Giga', sans-serif",
                  fontSize: "2.5rem",
                  color: "#7a5a5a",
                  transition: "transform 0.3s",
                  display: "inline-block",
                  transform: open === i ? "rotate(90deg)" : "rotate(0deg)",
                }}>
                  ›
                </span>
              </button>
            </div>
          ))}
      </div>

      {/* Right panel — blob background + content */}
      <div
        style={{
          flex: 1,
          position: "relative",
          overflow: "hidden",
          background: "#f2c8c8",
          padding: "80px 7% 80px 5%",
        }}
      >
        <OmbreBlob
          size={200}
          blur={50}
          opacity={0.65}
          style={{ top: -90, right: -70, transform: "rotate(-12deg)" }}
        />
        <OmbreBlob
          size={500}
          blur={80}
          opacity={0.75}
          style={{ bottom: -180, right: -140 }}
        />
        <div
          style={{
            position: "relative",
            zIndex: 1,
            fontFamily: "'Lexend Giga', sans-serif",
            fontSize: "clamp(0.8rem, 1.2vw, 0.98rem)",
            fontWeight: 300,
            color: "#4a3535",
            lineHeight: 1.9,
            minHeight: 160,
            opacity: open !== null ? 1 : 0,
            transition: "opacity 0.3s",
          }}
        >
          {open !== null && (
            <ul style={{ margin: 0, paddingLeft: "1.15rem" }}>
              {skills[open].items.split(",").map((item) => {
                const trimmed = item.trim();
                return (
                  <li key={trimmed} style={{ marginBottom: 8 }}>
                    {trimmed}
                  </li>
                );
              })}
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
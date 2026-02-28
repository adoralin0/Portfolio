"use client";

import Image from "next/image";

import OmbreBlob from "./OmbreBlob";
import portfoliowareImg from "./portfolioware.png";
import portfoliosipImg from "./portfoliosip.png";
import portfoliouberImg from "./portfoliouber.png";
import portfoliocoeImg from "./portfoliocoe.png";

const examples = [
  {
    title: "Ware Am I?",
    subtitle: "2D Game",
    tags: ["Unity"],
    href: "https://levigotboom.itch.io/ware-am-i",
    image: portfoliowareImg,
    imageBg: "linear-gradient(135deg, #0d1f0d 0%, #1a3a1a 40%, #0a150a 100%)",
  },
  {
    title: "Sip Safe (Won Best Use of Digital Ocean)",
    subtitle: "Drink Tracker - WiNGHacks Project",
    tags: ["Figma", "React Expo"],
    href: "https://devpost.com/software/sipsafe-c2r3x7",
    image: portfoliosipImg,
    imageBg: "linear-gradient(135deg, #1a0800 0%, #3d1800 40%, #7a3010 100%)",
  },
  {
    title: "New Biz",
    subtitle: "Case Studies",
    tags: ["TailwindCSS", "Node.js"],
    href: "https://docs.google.com/document/d/1Ioe44EisPRUUHcPQ475j2ZANhoR1yv3o1zZMI3gBYyM/edit?usp=sharing",
    image: portfoliouberImg,
    imageBg: "linear-gradient(135deg, #0a1a08 0%, #1a3010 40%, #2a5020 100%)",
  },
  {
    title: "College of Engineering Website",
    subtitle: "Legacy Microsite",
    tags: ["Typescript", "Figma"],
    href: "https://college-of-engineering-microsite.vercel.app/",
    image: portfoliocoeImg,
    imageBg: "linear-gradient(135deg, #030b25 0%, #061540 40%, #0a2060 100%)",
  },
];

export default function ProjectExamples() {
  return (
    <section
      style={{
        background: "#f2c8c8",
        padding: "60px 5% 80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Blob — top-left, large (same as Hero) */}
      <OmbreBlob
        size={480}
        blur={80}
        opacity={0.75}
        style={{ top: -100, left: -80, zIndex: 0 }}
      />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "28px 32px",
          maxWidth: 1200,
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        {examples.map((p, i) => (
          <div key={i}>
            <div
              className="project-card-hover"
              style={{
                background: "#E9D7CD",
                borderRadius: 14,
                overflow: "hidden",
                cursor: "pointer",
              }}
            >
              {/* Image area */}
              <div
                style={{
                  height: 230,
                  background: p.imageBg,
                  position: "relative",
                  display: "flex",
                  alignItems: "flex-end",
                  padding: "0 14px 14px",
                }}
              >
                {p.image && (
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    unoptimized
                  />
                )}
                {/* Tag pills — bottom left */}
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap", position: "relative", zIndex: 1 }}>
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      style={{
                        background: "#E9D7CD",
                        color: "#000",
                        fontFamily: "'Lexend Giga', sans-serif",
                        fontSize: "0.62rem",
                        fontWeight: 300,
                        padding: "6px 16px",
                        borderRadius: 999,
                        letterSpacing: "0.02em",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card footer */}
              <div
                style={{
                  padding: "16px 18px 20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 12,
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: "'Lexend Giga', sans-serif",
                      fontSize: "1rem",
                      fontWeight: 400,
                      color: "#000",
                      marginBottom: 5,
                      lineHeight: 1.3,
                    }}
                  >
                    {p.title}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Lexend Giga', sans-serif",
                      fontSize: "0.62rem",
                      fontWeight: 300,
                      color: "#000",
                      letterSpacing: "0.02em",
                    }}
                  >
                    {p.subtitle}
                  </div>
                </div>

                {/* Arrow button */}
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-arrow-hover"
                  style={{
                    fontFamily: "'Lexend Giga', sans-serif",
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    border: "1.5px solid #000",
                    background: "transparent",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#000",
                    fontSize: "2.35rem",
                    textDecoration: "none",
                    flexShrink: 0,
                    paddingBottom: 6,
                  }}
                >
                  ›
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Libre+Caslon+Text:ital,wght@0,400;0,700;1,400&family=Lexend+Giga:wght@100;200;300;400&display=swap');
      `}</style>
    </section>
  );
}
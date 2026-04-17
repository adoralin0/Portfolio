"use client";

import Image from "next/image";
import portfoliowareImg from "./portfolioware.png";
import portfoliosipImg from "./portfoliosip.png";
import portfoliouberImg from "./portfoliouber.png";
import portfoliocoeImg from "./portfoliocoe.png";

const examples = [
  {
    title: "New Biz",
    subtitle: "Case Studies",
    tags: ["TailwindCSS", "Node.js"],
    href: "/websites/new-biz",
    image: portfoliouberImg,
    imageBg: "linear-gradient(135deg, #f0e3d3 0%, #eacdc7 40%, #cfc1b4 100%)",
  },
  {
    title: "Sip Safe (Won Best Use of Digital Ocean)",
    subtitle: "Drink Tracker - WiNGHacks Project",
    tags: ["Figma", "React Expo"],
    href: "https://devpost.com/software/sipsafe-c2r3x7",
    image: portfoliosipImg,
    imageBg: "linear-gradient(135deg, #eacdc7 0%, #cfc1b4 40%, #f0e3d3 100%)",
  },
  {
    title: "Ware Am I?",
    subtitle: "2D Game",
    tags: ["Unity"],
    href: "https://levigotboom.itch.io/ware-am-i",
    image: portfoliowareImg,
    imageBg: "linear-gradient(135deg, #cfc1b4 0%, #e5e6d8 40%, #f0e3d3 100%)",
  },
  {
    title: "UF College of Engineering Website",
    subtitle: "work in progress",
    tags: ["Typescript", "Figma"],
    href: null,
    image: portfoliocoeImg,
    imageBg: "linear-gradient(135deg, #e5e6d8 0%, #f0e3d3 40%, #cfc1b4 100%)",
  },
];

export default function ProjectExamples() {
  return (
    <section
      style={{
        background: "#eacdc7",
        padding: "36px 4% 80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: 1360,
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
          background: "#f0e3d3",
          border: "8px solid #cfc1b4",
          borderRadius: 22,
          padding: 18,
          boxShadow: "0 12px 26px rgba(83, 67, 112, 0.22)",
        }}
      >
        <div
          style={{
            background: "#f0e3d3",
            border: "3px solid #cfc1b4",
            borderRadius: 10,
            padding: "52px 22px 34px",
            position: "relative",
          }}
        >
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              top: 14,
              right: 16,
              display: "flex",
              gap: 10,
            }}
          >
            <span style={{ width: 16, height: 16, borderRadius: "50%", background: "#ffffff", border: "4px solid #cfc1b4", boxSizing: "border-box" }} />
            <span style={{ width: 16, height: 16, borderRadius: "50%", background: "#f0e3d3", border: "4px solid #cfc1b4", boxSizing: "border-box" }} />
            <span style={{ width: 16, height: 16, borderRadius: "50%", background: "#eacdc7", border: "4px solid #cfc1b4", boxSizing: "border-box" }} />
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "64px 112px",
            }}
          >
        {examples.map((p, i) => (
          <div key={i}>
            <div
              className="project-card-hover"
              style={{
                background: "rgba(207, 193, 180, 0.72)",
                border: "6px solid rgba(207, 193, 180, 0.72)",
                borderRadius: 14,
                overflow: "hidden",
                cursor: "pointer",
                position: "relative",
              }}
            >
              {/* Image area */}
              <div
                style={{
                  height: 330,
                  background: p.imageBg,
                  position: "relative",
                  display: "flex",
                  alignItems: "flex-end",
                  padding: 0,
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
                {p.href && (
                  (() => {
                    const isExternal = p.href.startsWith("http");
                    return (
                  <a
                    href={p.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    aria-label={`Open ${p.title}`}
                    style={{
                      position: "absolute",
                      inset: 0,
                      zIndex: 2,
                    }}
                  />
                    );
                  })()
                )}
                {/* Tag pills — bottom left */}
                <div className="project-card-tags" style={{ display: "flex", gap: 8, flexWrap: "wrap", position: "absolute", zIndex: 4, left: 14, right: 14, top: 14 }}>
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      style={{
                        background: "#f0e3d3",
                        color: "#000",
                        fontFamily: "'Lexend Giga', sans-serif",
                        fontSize: "0.76rem",
                        fontWeight: 300,
                        padding: "8px 18px",
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
                className="project-card-content"
                style={{
                  padding: "24px 22px 30px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 12,
                  minHeight: 124,
                  position: "absolute",
                  left: 0,
                  right: 0,
                  bottom: 0,
                  zIndex: 4,
                  background: "linear-gradient(to top, rgba(207, 193, 180, 0.98) 0%, rgba(207, 193, 180, 0.9) 75%, rgba(207, 193, 180, 0.25) 100%)",
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: "'Lexend Giga', sans-serif",
                      fontSize: "1.18rem",
                      fontWeight: 400,
                      color: "#000",
                      marginBottom: 8,
                      lineHeight: 1.3,
                    }}
                  >
                    {p.title}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Lexend Giga', sans-serif",
                      fontSize: "0.8rem",
                      fontWeight: 300,
                      color: "#000",
                      letterSpacing: "0.02em",
                    }}
                  >
                    {p.subtitle}
                  </div>
                </div>

                {/* Arrow button */}
                {p.href && (
                  (() => {
                    const isExternal = p.href.startsWith("http");
                    return (
                  <a
                    href={p.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    className="project-arrow-hover"
                    style={{
                      fontFamily: "'Lexend Giga', sans-serif",
                      width: 44,
                      height: 44,
                      border: "none",
                      background: "transparent",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#000",
                      fontSize: "2.9rem",
                      fontWeight: 200,
                      lineHeight: 1,
                      textDecoration: "none",
                      flexShrink: 0,
                      paddingBottom: 2,
                    }}
                  >
                    ›
                  </a>
                    );
                  })()
                )}
              </div>
            </div>
          </div>
        ))}
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Libre+Caslon+Text:ital,wght@0,400;0,700;1,400&family=Lexend+Giga:wght@100;200;300;400&display=swap');
        .project-card-content,
        .project-card-tags {
          opacity: 0;
          transform: translateY(8px);
          transition: opacity 0.2s ease, transform 0.2s ease;
        }
        .project-card-hover:hover .project-card-content,
        .project-card-hover:hover .project-card-tags {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
}

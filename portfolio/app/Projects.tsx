"use client";
import Image from "next/image";
import Link from "next/link";
import sectionBg from "./Rectangle 29.png";
import calendarMonthly from "./calendar_monthly (1).png";
import calendarWeekly from "./calendar_weekly (1).png";
import envelopeHeart from "./envelope_heart (1).png";
import folder from "./folder (1).png";

const projectCategories = [
  { label: "Wireframes", href: "/wireframes", icon: folder },
  { label: "Websites", href: "/websites", icon: envelopeHeart, offsetY: 36 },
  { label: "Games", href: "/games", icon: calendarWeekly },
  { label: "Hackathons", href: "/hackathons", icon: calendarMonthly },
];

export default function Projects() {
  return (
    <section
      id="projects"
      style={{
        minHeight: "100vh",
        backgroundColor: "#f0e3d3",
        backgroundImage: `url(${sectionBg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "110px 7% 110px",
      }}
    >
      <div style={{ maxWidth: 1260, margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <h2
          style={{
            fontFamily: "'Libre Caslon Text', Georgia, serif",
            fontSize: "clamp(2.5rem, 6vw, 4rem)",
            fontWeight: 400,
            color: "#4a3535",
            letterSpacing: "0.08em",
            marginBottom: "2.5rem",
            textAlign: "center",
          }}
        >
          PROJECTS
        </h2>
        <div
          style={{
            backgroundColor: "#ffffff",
            border: "8px solid #cfc1b4",
            borderRadius: 22,
            padding: "18px",
            maxWidth: 1120,
            width: "100%",
            margin: "0 auto",
            boxShadow: "0 12px 26px rgba(83, 67, 112, 0.28)",
          }}
        >
          <div
            style={{
              backgroundColor: "#ffffff",
              border: "3px solid #cfc1b4",
              borderRadius: 10,
              padding: "58px 70px 64px",
              position: "relative",
            }}
          >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              gap: "56px 76px",
            }}
          >
            {projectCategories.map((category) => (
            <Link
              key={category.href}
              href={category.href}
              className="desktop-icon-link"
              style={{
                textDecoration: "none",
                color: "#4a3535",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 12,
                fontFamily: "'Lexend Giga', sans-serif",
                fontSize: "clamp(0.88rem, 1.4vw, 1.05rem)",
                letterSpacing: "0.03em",
                textAlign: "center",
                transition: "transform 0.2s ease",
                marginTop: category.offsetY ?? 0,
              }}
            >
              <Image
                src={category.icon}
                alt={`${category.label} icon`}
                width={210}
                height={210}
                className="desktop-icon-image"
                style={{
                  width: "min(38vw, 210px)",
                  height: "auto",
                  imageRendering: "pixelated",
                  transition: "transform 0.2s ease",
                }}
                unoptimized
              />
              <span className="desktop-icon-label">{category.label}</span>
            </Link>
          ))}
          </div>
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Libre+Caslon+Text:ital,wght@0,400;0,700;1,400&family=Lexend+Giga:wght@100;200;300;400&display=swap');
        .desktop-icon-link:hover {
          transform: translateY(-4px);
        }
        .desktop-icon-link:hover .desktop-icon-image {
          transform: scale(1.06);
        }
        .desktop-icon-link:hover .desktop-icon-label {
          color: #2f5ea7;
        }
      `}</style>
    </section>
  );
}

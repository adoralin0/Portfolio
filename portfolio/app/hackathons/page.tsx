import Image from "next/image";
import bitebackCoverImg from "../biteback_image.png";
import portfoliosipImg from "../portfoliosip.png";

const hackathonProjects = [
  {
    title: "Sip Safe (Won Best Use of Digital Ocean)",
    tags: ["Figma", "React Expo"],
    href: "https://devpost.com/software/sipsafe-c2r3x7",
    image: portfoliosipImg,
    imageBg: "linear-gradient(135deg, #eacdc7 0%, #cfc1b4 40%, #f0e3d3 100%)",
  },
  {
    title: "BiteBack: Giving local eats a fair fight.",
    tags: ["React", "Node.js", "Express"],
    href: "https://devpost.com/software/biteback-giving-local-eats-a-fair-fight",
    image: bitebackCoverImg,
    imageBg: "linear-gradient(135deg, #e5e6d8 0%, #cfc1b4 40%, #eacdc7 100%)",
  },
];

export default function HackathonsPage() {
  const navLinkStyle = {
    fontFamily: "'Lexend Giga', sans-serif",
    fontSize: "1.08rem",
    color: "#4a3a3a",
    textDecoration: "none",
    letterSpacing: "0.04em",
  } as const;

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "18px 6%",
          minHeight: 70,
          boxSizing: "border-box",
          background: "rgba(207, 193, 180, 0.72)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(200,160,160,0.2)",
        }}
      >
        <a href="/" className="nav-link-hover" style={navLinkStyle}>
          Adora
        </a>
        <div style={{ display: "flex", gap: 36 }}>
          <a href="/" className="nav-link-hover" style={navLinkStyle}>
            Home
          </a>
          <a href="/#projects" className="nav-link-hover" style={navLinkStyle}>
            Projects
          </a>
          <a href="/#paper-panels" className="nav-link-hover" style={navLinkStyle}>
            Highlights
          </a>
          <a href="/#skills" className="nav-link-hover" style={navLinkStyle}>
            Skills
          </a>
          <a href="/#contact" className="nav-link-hover" style={navLinkStyle}>
            Contact
          </a>
        </div>
      </nav>
    <main
      style={{
        minHeight: "100vh",
        background: "#f0e3d3",
        padding: "110px 7% 80px",
      }}
    >
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>
        <h1
          style={{
            fontFamily: "'Libre Caslon Text', Georgia, serif",
            fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
            fontWeight: 400,
            color: "#4a3535",
            marginBottom: "1.5rem",
          }}
        >
          Hackathons
        </h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
            gap: "52px 72px",
            marginBottom: "2rem",
          }}
        >
          {hackathonProjects.map((p) => (
            <div key={p.title} className="project-card-hover" style={{ background: "rgba(207, 193, 180, 0.72)", borderRadius: 14, overflow: "hidden" }}>
              <div
                style={{
                  height: 290,
                  background: p.imageBg,
                  position: "relative",
                  display: "flex",
                  alignItems: "flex-end",
                  padding: 0,
                }}
              >
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  unoptimized
                />
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${p.title}`}
                  style={{
                    position: "absolute",
                    inset: 0,
                    zIndex: 2,
                  }}
                />
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap", position: "relative", zIndex: 3, margin: "0 14px 14px" }}>
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      style={{
                        background: "#f0e3d3",
                        color: "#000",
                        fontFamily: "'Lexend Giga', sans-serif",
                        fontSize: "0.74rem",
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

              <div style={{ padding: "24px 22px 30px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 14, minHeight: 120 }}>
                <div
                  style={{
                    fontFamily: "'Lexend Giga', sans-serif",
                    fontSize: "1.14rem",
                    fontWeight: 400,
                    color: "#000",
                    lineHeight: 1.3,
                  }}
                >
                  {p.title}
                </div>

                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
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
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Libre+Caslon+Text:ital,wght@0,400;0,700;1,400&family=Lexend+Giga:wght@100;200;300;400&display=swap');
      `}</style>
    </>
  );
}


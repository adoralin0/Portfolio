import Image from "next/image";
import Link from "next/link";
import paperPanelsPreview from "../paperpanels_image.png";
import wicseWireframe from "../wicse_redesign_image.png";

export default function WireframesPage() {
  const navLinkStyle = {
    fontFamily: "'Lexend Giga', sans-serif",
    fontSize: "clamp(0.9rem, 1.2vw, 1.08rem)",
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
          padding: "clamp(12px, 2vw, 18px) clamp(4%, 6vw, 6%)",
          minHeight: 70,
          boxSizing: "border-box",
          background: "rgba(207, 193, 180, 0.72)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(200,160,160,0.2)",
        }}
      >
        <a href="https://adoralin0.github.io/Portfolio/" className="nav-link-hover" style={navLinkStyle}>
          Adora
        </a>
        <div style={{ display: "flex", gap: "clamp(12px, 2.4vw, 36px)" }}>
          <a href="https://adoralin0.github.io/Portfolio/" className="nav-link-hover" style={navLinkStyle}>
            Home
          </a>
          <a href="https://adoralin0.github.io/Portfolio/#projects" className="nav-link-hover" style={navLinkStyle}>
            Projects
          </a>
          <a href="https://adoralin0.github.io/Portfolio/#paper-panels" className="nav-link-hover" style={navLinkStyle}>
            Highlights
          </a>
          <a href="https://adoralin0.github.io/Portfolio/#skills" className="nav-link-hover" style={navLinkStyle}>
            Skills
          </a>
          <a href="https://adoralin0.github.io/Portfolio/#contact" className="nav-link-hover" style={navLinkStyle}>
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
      <div style={{ maxWidth: 1080, margin: "0 auto" }}>
        <h1
          style={{
            fontFamily: "'Libre Caslon Text', Georgia, serif",
            fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
            fontWeight: 400,
            color: "#4a3535",
            marginBottom: "1rem",
          }}
        >
          Wireframes
        </h1>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "52px 72px", marginBottom: "2rem" }}>
          <div
            className="project-card-hover"
            style={{
              background: "rgba(207, 193, 180, 0.72)",
              borderRadius: 14,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                height: 290,
                background: "linear-gradient(135deg, #cfc1b4 0%, #eacdc7 40%, #e5e6d8 100%)",
                position: "relative",
              }}
            >
              <Image
                src={wicseWireframe}
                alt="WiCSE Website Redesign preview"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 520px"
                unoptimized
              />
              <a
                href="https://www.figma.com/design/mRsSgsTaylGsDbA0snpNlK/WICSE-Website-Redesign?node-id=0-1&p=f&t=JMxUNCqXQQEzbEye-0"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open WiCSE Website Redesign"
                style={{
                  position: "absolute",
                  inset: 0,
                  zIndex: 2,
                }}
              />
            </div>

            <div
              style={{
                padding: "24px 22px 30px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 14,
                minHeight: 120,
              }}
            >
              <div
                style={{
                  fontFamily: "'Lexend Giga', sans-serif",
                  fontSize: "1.14rem",
                  fontWeight: 400,
                  color: "#000",
                  lineHeight: 1.3,
                }}
              >
                WiCSE Website Redesign
              </div>

              <Link
                href="https://www.figma.com/design/mRsSgsTaylGsDbA0snpNlK/WICSE-Website-Redesign?node-id=0-1&p=f&t=JMxUNCqXQQEzbEye-0"
                className="project-arrow-hover"
                target="_blank"
                rel="noopener noreferrer"
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
              </Link>
            </div>
          </div>

          <div
            className="project-card-hover"
            style={{
              background: "rgba(207, 193, 180, 0.72)",
              borderRadius: 14,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                height: 290,
                background: "linear-gradient(135deg, #eacdc7 0%, #f0e3d3 40%, #e5e6d8 100%)",
                position: "relative",
              }}
            >
              <Image
                src={paperPanelsPreview}
                alt="Paper Panels wireframe preview"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 520px"
                unoptimized
              />
              <Link
                href="https://adoralin0.github.io/Portfolio/#paper-panels"
                aria-label="Open Paper Panels section"
                style={{
                  position: "absolute",
                  inset: 0,
                  zIndex: 2,
                }}
              />
            </div>

            <div
              style={{
                padding: "24px 22px 30px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 14,
                minHeight: 120,
              }}
            >
              <div
                style={{
                  fontFamily: "'Lexend Giga', sans-serif",
                  fontSize: "1.14rem",
                  fontWeight: 400,
                  color: "#000",
                  lineHeight: 1.3,
                }}
              >
                Paper Panels
              </div>

              <Link
                href="https://adoralin0.github.io/Portfolio/#paper-panels"
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
              </Link>
            </div>
          </div>
        </div>
      </div>
      </main>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Libre+Caslon+Text:ital,wght@0,400;0,700;1,400&family=Lexend+Giga:wght@100;200;300;400&display=swap');
      `}</style>
    </>
  );
}


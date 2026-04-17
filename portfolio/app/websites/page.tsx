import Image from "next/image";
import portfoliocoeImg from "../portfoliocoe.png";
import portfoliouberImg from "../portfoliouber.png";

const websiteProjects = [
  {
    title: "New Biz",
    subtitle: "Case Studies",
    tags: ["TailwindCSS", "Node.js"],
    href: "/websites/new-biz",
    image: portfoliouberImg,
    imageBg: "linear-gradient(135deg, #f0e3d3 0%, #eacdc7 40%, #cfc1b4 100%)",
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

export default function WebsitesPage() {
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
          Websites
        </h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
            gap: "52px 72px",
            marginBottom: "2rem",
          }}
        >
          {websiteProjects.map((p) => (
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
                <div>
                  <div
                    style={{
                      fontFamily: "'Lexend Giga', sans-serif",
                      fontSize: "1.14rem",
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
                      fontSize: "0.78rem",
                      fontWeight: 300,
                      color: "#000",
                      letterSpacing: "0.02em",
                    }}
                  >
                    {p.subtitle}
                  </div>
                </div>

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


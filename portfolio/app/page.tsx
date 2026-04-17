"use client";
import Hero from "./Hero";
import Projects from "./Projects";
import PaperPanels from "./PaperPanels";
import ProjectExamples from "./ProjectExamples";
import Skills from "./Skills";
import Footer from "./Footer";
import { useState } from "react";

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLink = (href: string, label: string) => (
    <a
      href={href}
      className="nav-link-hover"
      style={{
        fontFamily: "'Lexend Giga', sans-serif",
        fontSize: "clamp(0.9rem, 1.2vw, 1.08rem)",
        color: "#4a3a3a",
        textDecoration: "none",
        letterSpacing: "0.04em",
      }}
    >
      {label}
    </a>
  );

  return (
    <>
      {/* Navbar */}
      <nav style={{
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
        overflow: "visible",
        background: "rgba(207, 193, 180, 0.72)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(200,160,160,0.2)",
      }}>
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <a
            href="https://adoralin0.github.io/Portfolio/"
            className="nav-link-hover"
            style={{
              fontFamily: "'Lexend Giga', sans-serif",
              fontSize: "clamp(0.9rem, 1.2vw, 1.08rem)",
              color: "#4a3a3a",
              textDecoration: "none",
              letterSpacing: "0.04em",
            }}
          >
            Adora
          </a>
        </div>

        {/* Links */}
        <div style={{ display: "flex", gap: "clamp(12px, 2.4vw, 36px)" }}>
          {navLink("https://adoralin0.github.io/Portfolio/", "Home")}
          {navLink("#projects", "Projects")}
          {navLink("#paper-panels", "Highlights")}
          {navLink("#skills", "Skills")}
          {navLink("#contact", "Contact")}
        </div>
      </nav>

      {/* Page offset for fixed nav */}
      <div style={{ paddingTop: 70 }}>
        <Hero />
        <Projects />
        <PaperPanels />
        <ProjectExamples />
        <Skills />
        <Footer />
      </div>
    </>
  );
}

